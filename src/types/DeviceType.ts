type Icon = {
  resolutions: number[][];
  id: string;
};
type Line = {
  name: string;
  id: string;
};
type Uisp = {
  nameLegacy: string[];
  bleServices: object[];
};
type Product = {
  abbrev: string;
  name: string;
};

type DeviceType = {
  sysids: string[];
  icon: Icon;
  line: Line;
  guids: string[];
  uisp: Uisp;
  id: string;
  product: Product;
  shortnames: string[];
  triplets: object[];
};

export default DeviceType;
