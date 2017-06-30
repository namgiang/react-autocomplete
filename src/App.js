import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchSearchResult } from './services/actions';

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
    this.handlers = createHandlers(this.props.dispatch);
  }

  componentDidMount() {
    document.title = "AutoComplete Search";
  }

  render() {
    const resultDivs = (typeof this.props.searchResult !== 'undefined') 
                       ? this.props.searchResult.map((title, index) => (<option value={ title } key={index}>{ title }</option>))
                       : [];

    return (
      <div className="App">
        <div className="search-component">
          <input type="text" 
                 name="search"
                 list="search-result" 
                 onChange={this.handlers.onSearchTermChanged} />
          <datalist id="search-result">
            { resultDivs }
          </datalist>               
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
