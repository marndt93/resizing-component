import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Resizing.css';


class Resizing extends Component {
  render() {
    let active
    let active2
    let orientation
    if (this.props.active && this.props.active2){
        active = '-half'
        active2 = '-half'
    }
    else if (this.props.active && !this.props.active2){
        active = '-full'
        active2 = ''
    }
    else if (this.props.active2 && !this.props.active){
        active2 = '-full'
        active = ''
    }
    else if (!this.props.active && !this.props.active2){
        active = ''
        active2 = ''
    }
    if (this.props.horizontal){
        orientation = '-horizontal'
    }
    else if (!this.props.horizontal){
        orientation = '-vertical'
    }
    
    return (
      <div>
        {/*this.props.children*/}
        <div className={"Resize" + active + orientation} style={{backgroundColor: "cornflowerblue"}}>
            {this.props.children[0]}
        </div>
        <div className={"Resize" + active2 + orientation} style={{backgroundColor: "coral"}}>
            {this.props.children[1]}
        </div>          

      </div>
    );
  }
}

Resizing.PropTypes = {
    active: PropTypes.bool.isRequired,
    active2: PropTypes.bool.isRequired,
    size: PropTypes.string,
    horizontal: PropTypes.bool
}
export default Resizing;
