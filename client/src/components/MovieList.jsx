import React from 'react';
import MovieEntry from './IndividualMovieEntry.jsx';

const TotalMovieList = (props) => (
  <div>
   {props.movies.map((movie, index) => (
     <div key={index}>
       <MovieEntry movie={movie}/>
     </div>

   ))}

  </div>
);

export default TotalMovieList;