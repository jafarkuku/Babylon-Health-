import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class InputComponent extends Component {
  /**
    *	Props implementation.
    */
  static propTypes = {
    checked: PropTypes.bool
  }

  /**
  * Render
  */
  render(){
    const { checked } = this.props;
    return <input type="checkbox" checked={checked} />  //Return input element
  }
}

export default InputComponent;
