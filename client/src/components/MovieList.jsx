import MovieEntry from '.IndividualMovieEntry.js';

var TotalMovieList = (props) => (
  <div>
   {props.movies.map((movie, index) => (
     <div key={index}>
       <MovieEntry movie={movie}/>
     </div>

   ))}

  </div>
);

export default TotalMovieList;