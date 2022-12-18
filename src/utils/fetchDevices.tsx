import DeviceListType from "../types/DeviceListType";

const fetchDevices = async () => {
  try {
    const data = await fetch(
      "https://static.ui.com/fingerprint/ui/public.json"
    );
    const response: DeviceListType = await data.json();
    return Promise.resolve({
      version: response.version,
      devices: response.devices,
      lastUpdated: Date.now(),
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchDevices;
