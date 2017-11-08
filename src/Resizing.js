import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Resizing extends Component {
  render() {
    return (
      <div className="App">
        {/*this.props.children*/}
        <div style={{height: "50%;"}}>
            {this.props.children[0]}
        </div>
        <div style={{height: "50%;"}}>
            {this.props.children[1]}
        </div>          

      </div>
    );
  }
}

Resizing.PropTypes = {
    active: PropTypes.bool.isRequired,
    size: PropTypes.string,
    orientation: PropTypes.string
}
export default Resizing;
