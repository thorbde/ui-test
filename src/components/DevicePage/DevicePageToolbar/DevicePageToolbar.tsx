import { Link } from "react-router-dom";
import BackIcon from "../../../assets/icons/back.svg";
import DeviceType from "../../../types/DeviceType";
import "./DevicePageToolbar.css";

const DevicePageToolbar = (props: { device: string | undefined }) => {
  return (
    <nav className="DevicePageToolbar">
      <Link to="/">
        <img className="DevicePageToolbar__back-btn" src={BackIcon} />
      </Link>
      {props.device && (
        <span className="DevicePageToolbar__device-name">{props.device}</span>
      )}
    </nav>
  );
};

export default DevicePageToolbar;
