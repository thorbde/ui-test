import DeviceListItem from "./DeviceListItem/DeviceListItem";
import DeviceListType from "../../types/DeviceListType";
import DeviceType from "../../types/DeviceType";
import ViewType from "../../types/ViewType";
import "./DeviceList.css";

const DeviceList = (props: {
  viewState: ViewType;
  filteredDeviceState: DeviceListType;
}) => {
  const lastUpdated = new Date(
    props.filteredDeviceState.lastUpdated
  ).toUTCString();

  if (props.filteredDeviceState) {
    return (
      <>
        <span className="DeviceList__lastUpdated">
          Device list last updated {lastUpdated}
        </span>

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

          {props.filteredDeviceState.devices.map((device: DeviceType) => {
            return (
              <DeviceListItem
                key={device.id}
                device={device}
                view={props.viewState}
              />
            );
          })}
        </ul>
      </>
    );
  }

  return <p>loading</p>;
};

export default DeviceList;
