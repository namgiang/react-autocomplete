import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="search-component">
          <input type="text" 
                 name="search"
                 value={this.state.value} 
                 onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
