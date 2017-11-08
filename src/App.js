import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resizing from './Resizing.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      active: false
    }
  }
  update(e) {
    this.setState({active: !this.state.active})
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.update.bind(this)}>Toggle Component 1</button>
        <button onClick={this.update.bind(this)}>Toggle Component 2</button>  
        <div>{this.state.active}</div>      
        <Resizing active = {this.state.active}>
          <div>hello</div>
          <div>world</div>
        </Resizing>
        
      </div>
    );
  }
}
export default App;
