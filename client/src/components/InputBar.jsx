import React from 'react';
import axios from 'axios';
import escape from 'underscore/modules/escape.js';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    // console.log('onchange event active');
    this.setState({
      newMovie: e.target.value
    })
  }

  handleSubmission(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.getInput(this.state.newMovie)
    axios.post('/api/movies', { title: this.state.newMovie, watched: 0 })
    .catch((err) => { console.log('post error', err) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <label>Add Movie</label>
        <input type="text" value={this.state.newMovie} onChange={this.handleInput} placeholder="Movie Title..."></input>
        <input type="submit"></input>
      </form>
    )

  }

}
export default InputBar;