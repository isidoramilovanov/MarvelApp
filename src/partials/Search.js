import React from "react";

const Search = props => {

  return (
    <div className="container-search">
        <div className="search form-search">
          <input
            onChange={props.searchFilter}
            value={props.inputValue}
            type="search"
            placeholder="Search here..."
            name="search"
          />
        </div>
    </div>
  );
};

export default Search;
