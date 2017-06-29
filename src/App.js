import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rx from 'rxjs';
import './App.css';

import MovieService from './services/movies';
import { fetchSearchResult } from './services/actions';

// let searchTerms = new Rx.Subject();
// let searchResults = searchTerms
//       .debounceTime(300)
//       .distinctUntilChanged()
//       .switchMap(term => term
//         ? MovieService.search(term)
//         : Rx.Observable.of([]) )
//       .catch(error => {
//         console.log(error);
//         return Rx.Observable.of([]);
//       }).subscribe(results => 
//       {
//         console.log(results);
//         return results;
//       });

// let subscription;
let createHandlers = function(dispatch) {
  let onSearchTermChanged = function(event) {
    dispatch(fetchSearchResult(event.target.value));
  };
  
  return {
    onSearchTermChanged
  };
}

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {value: ''};
    this.handlers = createHandlers(this.props.dispatch);
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    console.log(this.props.searchResult);
    const resultDivs = this.props.searchResult.map(title => (<option value={ title }></option>) );
    return (
      <div className="App">
        <div className="search-component">
          <input type="text" 
                 name="search"
                 list="searchResult"
                 value={this.state.value} 
                 onChange={(event) => {this.handleChange(event);this.handlers.onSearchTermChanged(event)} } />
          <datalist id="searchResult">{ resultDivs }</datalist>
                 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    searchResult: state.app.searchResult
  };
}

export default connect(mapStateToProps)(App);
