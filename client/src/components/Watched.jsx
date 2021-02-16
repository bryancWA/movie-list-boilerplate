import React from 'react';
import MovieEntry from './IndividualMovieEntry.jsx';

const Watched = (props) => (

 <div>
    {this.props.movies.map((movie, index) => (
      <div key={index}>
       <MovieEntry movie={movie} movieVal={'watched'} handleWatch={this.props.handleWatch} movieInfo={props.movieInfo}/>
      </div>
    ))}
  </div>
)

export default Watched;