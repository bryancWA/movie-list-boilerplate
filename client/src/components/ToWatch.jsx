import React from 'react';
import MovieEntry from './IndividualMovieEntry.jsx';

const ToWatch = (props) => (
  <div>
      <div>
        {this.props.movies.map((movie, index) => (
          <div key={index}>
            <MovieEntry movie={movie} movieVal={'to-watch'} handleWatch={this.props.handleWatch} movieInfo={props.movieInfo}/>
          </div>
        ))}
      </div>
  </div>
)

export default ToWatch;