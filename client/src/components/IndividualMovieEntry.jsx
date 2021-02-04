import React from 'react';

const MovieEntry = (props) => (
  <div className="movie-entry">
    {console.log(props.movie)}
    <div value={props.movie.title}>{props.movie.title}</div>
  </div>





)





export default MovieEntry;