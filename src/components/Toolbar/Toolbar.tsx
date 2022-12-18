import Actions from "./Actions/Actions";
import Search from "./Search/Search";
import ViewType from "../../types/ViewType";
import "./Toolbar.css";

const Toolbar = (props: {
  viewState: ViewType;
  setViewState: Function;
  setSearchState: Function;
}) => {
  return (
    <nav className="Toolbar">
      <Search setSearchState={props.setSearchState} />
      <Actions viewState={props.viewState} setViewState={props.setViewState} />
    </nav>
  );
};

export default Toolbar;
