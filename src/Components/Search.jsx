import PropTypes from "prop-types";

import { BsSearchHeart } from "react-icons/bs";

import "./Search.css";
import { useState } from "react";

const Search = ({ getInputValue }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const changeInputHandler = (e) => {
    setError(false);
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError(true);
      return;
    }
    getInputValue(value.toLowerCase());
  };

  return (
    <>
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <h1 className="search-title">Search your favorite movie</h1>
        <input
          className="search-movie"
          type="search"
          placeholder="Search movie"
          value={value}
          onChange={(e) => changeInputHandler(e)}
        />
        <BsSearchHeart className="BsSearchHeart" />
        <button className="search-btn">Search</button>
      </form>
      {error && <p className="error-message">Please enter something</p>}
    </>
  );
};

Search.propTypes = {
  getInputValue: PropTypes.func.isRequired,
};

export default Search;
