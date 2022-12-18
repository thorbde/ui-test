import DeviceType from "./DeviceType";

type DeviceListType = {
  version: string;
  devices: DeviceType[];
  lastUpdated: number;
};

export default DeviceListType;
