import ViewType from "../../../types/ViewType";
import "./Actions.css";

const Actions = (props: { viewState: ViewType; setViewState: Function }) => {
  return (
    <div className="Actions">
      <button
        className={
          props.viewState === "list"
            ? "Actions__list-view--active"
            : "Actions__list-view"
        }
        onClick={() => props.setViewState("list")}
        aria-label="list view button"
      />
      <button
        className={
          props.viewState === "grid"
            ? "Actions__grid-view--active"
            : "Actions__grid-view"
        }
        onClick={() => props.setViewState("grid")}
        aria-label="grid view button"
      />
      <button className="Actions__filter">Filter</button>
    </div>
  );
};

export default Actions;
