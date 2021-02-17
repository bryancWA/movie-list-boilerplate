import React from 'react';

const MovieEntry = (props) => (
  <div className="movie-entry">
    <form  onChange={props.handleWatch}>
      <label onClick={props.movieInfo} value={props.movie.title}> {props.movie.title} </label>
      <select defaultValue={props.movieVal}>
        <option value="selectCategory"> - </option>
        <option value="to-watch">to watch</option>
        <option value="watched">watched</option>
      </select>
      {/* <button onClick={props.handleDelete}>remove</button> */}
      <button onClick={props.movieInfo} value={props.movie.title}> Movie Info </button>
    </form>
    <div id={props.movie.title}></div>
  </div>





)





export default MovieEntry;