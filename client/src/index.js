import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import movies from './exampleMovieList.js'

ReactDOM.render(<App movieList={movies}/>, document.getElementById('app'));