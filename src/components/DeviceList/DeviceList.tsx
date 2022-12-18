import DeviceListItem from "./DeviceListItem/DeviceListItem";
import DeviceListType from "../../types/DeviceListType";
import DeviceType from "../../types/DeviceType";
import ViewType from "../../types/ViewType";
import "./DeviceList.css";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";

const perPage = 25;

const DeviceList = (props: {
  viewState: ViewType;
  filteredDeviceState: DeviceListType;
}) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const maxPage = Math.ceil(props.filteredDeviceState.devices.length / perPage);

  return (
    <section className="DeviceList__wrapper">
      <ul
        className={`DeviceList DeviceList--${
          props.viewState === "list" ? "list-view" : "grid-view"
        }`}
      >
        {props.viewState === "list" && (
          <li className="DeviceList__labels">
            <span className="DeviceList__device-count">
              {props.filteredDeviceState.devices.length} devices
            </span>
            <h3 className="DeviceList__line-header">PRODUCT LINE</h3>
            <h3 className="DeviceList__name-header">NAME</h3>
          </li>
        )}

        {props.filteredDeviceState.devices
          .slice((paginationPage - 1) * perPage, paginationPage * perPage)
          .map((device: DeviceType) => {
            return (
              <DeviceListItem
                key={device.id}
                device={device}
                view={props.viewState}
              />
            );
          })}
      </ul>
      <Pagination
        paginationPage={paginationPage}
        setPaginationPage={setPaginationPage}
        maxPage={maxPage}
      />
    </section>
  );
};

export default DeviceList;
