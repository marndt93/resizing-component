import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resizing from './Resizing.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      active: false,
      active2: false,
      horizontal: true,
    }
  }
  update(e) {
    if (e.target.id === 'component_1'){
      this.setState({active: !this.state.active})  
    }
    if (e.target.id === 'component_2'){
      this.setState({active2: !this.state.active2})
    }
    if (e.target.id === 'toggle_orientation'){
      this.setState({horizontal: !this.state.horizontal})
    }
  }
  render() {
    return (
      <div>
        <div className="App">
          <button id='component_1' onClick={this.update.bind(this)}>Toggle Component 1</button>
          <button id='component_2' onClick={this.update.bind(this)}>Toggle Component 2</button>
          <button id='toggle_orientation' onClick={this.update.bind(this)}>Toggle Orientation</button>
        </div> 
        <div>{this.state.active}</div>      
        <Resizing active = {this.state.active} active2 = {this.state.active2} horizontal = {this.state.horizontal}>
          <div>hello</div>
          <div>world</div>
        </Resizing>
        
      </div>
    );
  }
}
export default App;
