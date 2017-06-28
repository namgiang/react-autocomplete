import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import MovieService from './services/movies';
import { setSearchResult } from './services/actions';

let createHandlers = function(dispatch) {
  let onSearchTermChanged = function(event) {
    MovieService.search(event.target.value)
    .then(response => {
      console.log(response);
      dispatch(setSearchResult(response.results));
    });
  };
  
  return {
    onSearchTermChanged
  };
}

class App extends Component {
  constructor(props: any) {
    super(props);

    this.handlers = createHandlers(this.props.dispatch);
  }

  render() {
    console.log(this.props.searchResult);
    return (
      <div className="App">
        <div className="search-component">
          <input type="text" 
                 name="search"
                 value={this.state.value} 
                 onChange={this.handlers.onSearchTermChanged} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.app.searchResult
  };
}

export default connect(mapStateToProps)(App);
