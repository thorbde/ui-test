import { useParams } from "react-router-dom";

import DevicePageToolbar from "./DevicePageToolbar/DevicePageToolbar";

import DeviceListType from "../../types/DeviceListType";

import "./DevicePage.css";

const biggestResolution = (resolutions: number[][]): string => {
  const resolution = resolutions.sort((a, b) => a[0] - b[0])[
    resolutions.length - 1
  ];
  return `${resolution[0]}x${resolution[1]}`;
};

const DevicePage = (props: { deviceState: DeviceListType }) => {
  const params = useParams();
  const device = props.deviceState.devices.find(
    (dev) => dev.id === params.deviceid
  );

  return (
    <>
      <DevicePageToolbar device={device?.product.name} />
      {device ? (
        <article className="DevicePage">
          <img
            className="DevicePage__icon"
            src={`https://static.ui.com/fingerprint/ui/icons/${
              device.icon.id
            }_${biggestResolution(device.icon.resolutions)}.png`}
          />
          <ul className="DevicePage__info">
            <li className="DevicePage__name">
              <span className="DevicePage__info-label">Product line</span>
              <span className="DevicePage__info-data">{device.line.name}</span>
            </li>
            <li>
              <span className="DevicePage__info-label">ID</span>
              <span className="DevicePage__info-data">{device.line.id}</span>
            </li>
            <li>
              <span className="DevicePage__info-label">Name</span>
              <span className="DevicePage__info-data">
                {device.product.name}
              </span>
            </li>
            <li>
              <span className="DevicePage__info-label">Short name</span>
              <span className="DevicePage__info-data">
                {device.product.abbrev}
              </span>
            </li>
          </ul>
        </article>
      ) : (
        <div className="DevicePage__error">
          <h1 className="DevicePage__error-header">We're sorry!</h1>
          <p className="DevicePage__error-description">
            The device you selected was not found.
          </p>
        </div>
      )}
    </>
  );
};

export default DevicePage;
