import React from 'react';
import TotalMovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movieList,
      searchTerm: 'searchTerm not changed'
    }
    this.formSubmission = this.formSubmission.bind(this);
    this.editSearchTerm = this.editSearchTerm.bind(this);
    this.resetMovieList = this.resetMovieList.bind(this);
  }
  editSearchTerm(e) {
    console.log('value entered inside editSearchTerm', )
    this.setState({searchTerm: e.target.value})
    e.preventDefault();
  }

  formSubmission(event) {
    event.preventDefault();

    console.log('value entered', this.state.searchTerm)
    console.log(this.state.movies);
    this.setState({
      movies: this.state.movies.filter(index => index.title.toLowerCase() === this.state.searchTerm.toLowerCase())
    });

  }

  resetMovieList(e) {
    e.preventDefault();
    this.setState({movies: this.props.movieList});
  }

  render() {
    return (
      <div className="outer-container">
        <h2>Movie List</h2>
        <div><SearchBar movies={this.state.movies} editSearch={this.editSearchTerm}  value={this.state.searchTerm} formSubmission={this.formSubmission} resetMovieList={this.resetMovieList}/></div>
        <div className="inner-container">
         <div><TotalMovieList movies={this.state.movies}/></div>
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