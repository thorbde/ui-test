import "./Search.css";
import searchIcon from "../../../assets/icons/search.svg";
import { FormEvent, useRef } from "react";

const Search = (props: { setSearchState: Function }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const search = () => {
    if (inputRef.current) {
      props.setSearchState(inputRef.current.value);
    }
  };

  const clearSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      props.setSearchState(inputRef.current.value);
    }
  };

  return (
    <form className="Search">
      <img className="Search__icon" src={searchIcon} alt="search icon" />
      <input
        className="Search__input"
        ref={inputRef}
        onChange={search}
        placeholder="Search"
      />
      <button
        className="Search__clear"
        type="button"
        onClick={clearSearch}
        aria-label="clear search"
      />
    </form>
  );
};

export default Search;
