import Header from "./Header/Header";
import Toolbar from "./Toolbar/Toolbar";
import DeviceList from "./DeviceList/DeviceList";
import DevicePage from "./DevicePage/DevicePage";

import ViewType from "../types/ViewType";
import DeviceListType from "../types/DeviceListType";

import fetchDevices from "../utils/fetchDevices";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  const [errorState, setErrorState] = useState(false);
  const [viewState, setViewState] = useState<ViewType>("list");
  const [deviceState, setDeviceState] = useState<DeviceListType | undefined>(
    undefined
  );
  let [searchState, setSearchState] = useState("");
  let [filteredDeviceState, setFilteredDeviceState] = useState<
    DeviceListType | undefined
  >(undefined);

  useEffect(() => {
    fetchDevices()
      .then((list: DeviceListType) => {
        localStorage.setItem("deviceState", JSON.stringify(list));
        return setDeviceState(list);
      })
      .catch(() => {
        const offlineState = localStorage.getItem("deviceState");
        if (offlineState !== null) {
          return setDeviceState(JSON.parse(offlineState));
        }
        return setErrorState(true);
      });
  }, []);

  useEffect(() => {
    if (deviceState !== undefined) {
      const searchRegex = new RegExp(searchState, "i");

      const filteredDevices = deviceState.devices.filter(
        (device) =>
          searchRegex.test(device.product.name) ||
          searchRegex.test(device.line.name)
      );

      setFilteredDeviceState({
        version: deviceState.version,
        lastUpdated: deviceState.lastUpdated,
        devices: filteredDevices,
      });
    }
  }, [deviceState, searchState]);

  return (
    <div className="App">
      <Header />
      {filteredDeviceState && deviceState && (
        <>
          <Routes>
            <Route
              path="/:deviceid"
              element={<DevicePage deviceState={deviceState} />}
            />
            <Route
              path="/"
              element={
                <>
                  <Toolbar
                    viewState={viewState}
                    setViewState={setViewState}
                    setSearchState={setSearchState}
                  />
                  <DeviceList
                    viewState={viewState}
                    filteredDeviceState={filteredDeviceState}
                  />
                </>
              }
            />
          </Routes>
        </>
      )}
      {errorState && (
        <div className="App">
          <main className="Error">
            <h1 className="Error__header">We're sorry!</h1>
            <p className="Error__message">
              There was an issue when connecting to the database, and no local
              copy of the database was found on your machine. Please try again
              later!
            </p>
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
