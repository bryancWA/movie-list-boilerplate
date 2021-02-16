import React from 'react';

const SearchBar = (props) => (
  <div className="search-bar">
    <form onSubmit={props.formSubmission}>
      <label>Movie Search</label>
      <input type="text" onChange={props.editSearch} placeholder="Search..."></input>
      <input type="submit" value="Submit" ></input>
      <input type="reset" value="reset" onClick={props.resetMovieList}></input>
    </form>
  </div>

);

export default SearchBar;