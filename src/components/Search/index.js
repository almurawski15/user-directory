import React from "react";

function Search(props) {
    return(
    <form className="search">
      <div className="form-group">
        <label htmlFor="language"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search for An Employee"
          id="search"
        />
      <div className="input-group-append">
          <button className="btn btn-dark">
            Search
          </button>
          </div>
      </div>
    </form>
  ); 
}

export default Search;