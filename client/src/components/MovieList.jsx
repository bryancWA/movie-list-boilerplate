import React from 'react';
import MovieEntry from './IndividualMovieEntry.jsx';

class TotalMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }



  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => (
          <div key={index}>
            <MovieEntry movie={movie} handleWatch={this.props.handleWatch} movieInfo={this.props.movieInfo}/>
          </div>
        ))}
      </div>
    )
  }

}

export default TotalMovieList;