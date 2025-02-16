import React from "react";
import "./SearchBar.css";
// import ResultsList from "../ResultsList/ResultsList";

const SearchBar = ({ onSearch }) => {
  return (
    <>
    <div className="search-container">
      <input
        type="text"
        placeholder="Search here..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
        />
      <button className="search-button">Search</button>
    </div>
        </>
  );
};

export default SearchBar;
