import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class LabelComponent extends Component {
  /**
    *	Props implementation.
    */
  static propTypes = {
    label: PropTypes.string
  }

  /**
  * Render
  */
  render(){
    const { label } = this.props; //Props are being defined here.
    return <span>{label}</span> //Return input element
  }
}

export default LabelComponent;
