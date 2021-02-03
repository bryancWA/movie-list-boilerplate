import React from 'react';
import TotalMovieList from '.MovieList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="outer-container">
        <div className="inner-container">
         <div><MovieList movies={props.movies}/></div>
        </div>
      </div>
    );
  }
}

export default App;