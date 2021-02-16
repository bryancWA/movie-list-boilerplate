import React from 'react';
import ReactDOM from 'react-dom';
import TotalMovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import InputBar from './InputBar.jsx';
import axios from 'axios';
import ToWatch from './ToWatch.jsx';
import Watched from './Watched.jsx';
import API_KEY from './apistuff.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: 'searchTerm not changed',
      // watched: [],
      // toWatch: []
    }
    this.formSubmission = this.formSubmission.bind(this);
    this.editSearchTerm = this.editSearchTerm.bind(this);
    this.resetMovieList = this.resetMovieList.bind(this);
    this.getInput = this.getInput.bind(this);
    this.getMovieList = this.getMovieList.bind(this);
    this.handleWatchSelect = this.handleWatchSelect.bind(this);
    this.handleWatchedRender = this.handleWatchedRender.bind(this);
    this.handleToWatchRender = this.handleToWatchRender.bind(this);
    this.handleMovieInfo = this.handleMovieInfo.bind(this);

  }
  editSearchTerm(e) {
    this.setState({searchTerm: e.target.value})
    e.preventDefault();
  }

  formSubmission(event) {
    event.preventDefault();
    this.setState({
      movies: this.state.movies.filter(index => index.title.toLowerCase() === this.state.searchTerm.toLowerCase())
    });
  }

  resetMovieList(e) {
    e.preventDefault();
    this.setState({movies: this.state.masterList});
  }

  getInput(movie) {
    console.log(movie);
    let tempObj = {'title': movie};
    let tempArr = this.state.movies;
    tempArr.push(tempObj);
    this.setState({
      movies: tempArr,
      masterList: tempArr
    })

  }

  getMovieList() {
    axios.get('/api/movies')
      .then((response) => {this.setState({
        movies: response.data
      })})
      .catch((err) => { console.log('error in getMovieList:', err) })
  }

  handleWatchSelect(event) {
    event.preventDefault();
    let watchedArr = this.state.watched;
    let toWatchArr = this.state.toWatch;
    if (event.target.value === 'watched') {
      // watchedArr.push(event.target.id);
      // this.setState({ watched: watchedArr});
      // console.log('this.state.watched: ', this.state.watched)
      axios.patch('/api/movies', { title: event.target.id, watched: 1 })
        .catch((err) => { console.log('watch patch error', err) })
    }
    if (event.target.value === 'to-watch') {
      // toWatchArr.push(event.target.id)
      // this.setState({ toWatch: toWatchArr })
      // console.log('this.state.toWatch: ', this.state.toWatch);
      axios.patch('/api/movies', { title: event.target.id, watched: 0 })
        .catch((err) => { console.log('towatch patch error: ', err) })
    }
  }

  handleWatchedRender(event) {
    event.preventDefault();
    axios.get('/api/movies/watched')
      .then((response) => { this.setState({ movies: response.data })})
    ReactDOM.render(<Watched movies={this.state.movies} handleWatch={this.handleWatchSelect} movieInfo={this.handleMovieInfo}/>,
      document.getElementById('inner-container'))
  }

  handleToWatchRender(event) {
    event.preventDefault();
    axios.get('/api/movies/towatch')
      .then((response) => { this.setState({ movies: response.data })})
    ReactDOM.render(<ToWatch movies={this.state.movies} handleWatch={this.handleWatchSelect} movieInfo={this.handleMovieInfo}/>,
      document.getElementById('inner-container'))
  }

  handleDelete(event) {
    event.preventDefault();

  }

  handleMovieInfo(event) {
    event.preventDefault();
    console.log('click event registered handle movie Info');
    axios.get('https://api.themoviedb.org/3/movie/671?api_key=' + API_KEY)
      // url: 'https://api.themoviedb.org/3/movie/671?api_key=' + API_KEY,
      // movie_id: 671,
      // title: event.target.value
    // })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => { console.log('moviedb get error ', err) })
  }

  //create a getInput method that retrieves input from inputBar state and pass as props
  componentDidMount() {
    this.getMovieList();
  }

  render() {
    return (
      <div className="outer-container">
        <h2>Movie List</h2>
        <div><InputBar getInput={this.getInput}/></div>
        <div><SearchBar movies={this.state.movies} editSearch={this.editSearchTerm}  value={this.state.searchTerm} formSubmission={this.formSubmission} resetMovieList={this.resetMovieList}/></div>
        <div id="watched-movies">
          <button onClick={this.handleWatchedRender}>Watched</button>
        </div>
        <div id="to-watch-movies">
          <button onClick={this.handleToWatchRender}>To Watch</button>
        </div>
        <div className="inner-container">

            <div><TotalMovieList movies={this.state.movies} handleWatch={this.handleWatchSelect} movieInfo={this.handleMovieInfo}/></div>
          </div>
      </div>
    );
  }
}

export default App;

//dynamicSearch={this.dynamicSearch()}
//      function(title) {
  // if(title === this.state.searchTerm) {
  //   return title;
  // }
  //{this.state.movies.length === 0 ? <div className="no-movie"><h3>No Title found by that name...</h3></div> :