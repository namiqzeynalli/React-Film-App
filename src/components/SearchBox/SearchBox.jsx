import React, { useRef, useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { getSearchMovies } from "../../store/slices/movieSlice";

const SearchBox = () => {

  const dispatch = useDispatch()

  const searchInputRef = useRef()

  const [state, setState] = useState({
    searchLine: "",
  });

  const searchLineChangeHandler = (e) => {
    setState({ searchLine: e.target.value });
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  const { searchLine } = state;

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Search for film name:
          <input
            ref={searchInputRef}
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="For example, The Godfather"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
          onClick={()=>{
            return dispatch(getSearchMovies(searchInputRef.current.value))
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
