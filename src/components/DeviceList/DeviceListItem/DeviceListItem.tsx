import DeviceType from "../../../types/DeviceType";
import ViewType from "../../../types/ViewType";
import { Link } from "react-router-dom";

import "./DeviceListItem.css";

const Device = (props: { device: DeviceType; view: ViewType }) => {
  const resolutions: string[] = props.device.icon.resolutions
    .sort((a, b) => a[0] - b[0])
    .map((resolution) => `${resolution[0]}x${resolution[1]}`);

  return (
    <Link to={`/${props.device.id}`}>
      <li className={`DeviceListItem DeviceListItem--${props.view}`}>
        <img
          src={`https://static.ui.com/fingerprint/ui/icons/${
            props.device.icon.id
          }_${
            props.view === "list"
              ? resolutions[0]
              : resolutions[resolutions.length - 1]
          }.png`}
          className={`DeviceListItem__icon DeviceListItem__icon--${props.view}`}
          alt="device icon"
        />
        <span
          className={`DeviceListItem__name DeviceListItem__name--${props.view}`}
        >
          {props.device.product.name}
        </span>
        <span
          className={`DeviceListItem__line-name DeviceListItem__line-name--${props.view}`}
        >
          {props.device.line.name}
        </span>
      </li>
    </Link>
  );
};

export default Device;
