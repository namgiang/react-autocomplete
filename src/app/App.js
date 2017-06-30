import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import debounce from 'lodash/debounce';
import './App.css';

import { fetchSearchResult } from '../services/actions';

let createHandlers = function(dispatch) {
  let onSearchTermChanged = e => {
    dispatch(fetchSearchResult(e.target.value));
  }

  return {
    onSearchTermChanged
  };
}

class App extends Component {
  constructor(props: any) {
    super(props);
    let handlers = createHandlers(this.props.dispatch);
    this.onTermChangedHandler = compose(
      debounce(handlers.onSearchTermChanged, 250),
      e => e.persist() || e
    );
  }

  componentDidMount() {
    document.title = "AutoComplete Search";
  }

  render() {
    const resultDivs = (typeof this.props.searchResult !== 'undefined') 
                       ? this.props.searchResult.map((title, index) => (<option value={ title } key={index}>{ title }</option>))
                       : [];
    return (
      <section className="App">
        <div className="search-component">
          <input type="text" 
                 name="search"
                 list="search-result"
                 className="search-component--input"
                 placeholder="Search movies by title"
                 onChange={this.onTermChangedHandler} />
          <datalist id="search-result">
            { resultDivs }
          </datalist>               
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.app.searchResult
  };
}

export default connect(mapStateToProps)(App);
