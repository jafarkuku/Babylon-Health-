import React, { Component } from 'react';
import { render } from 'react-dom';

import InputComponent from './InputComponent';
import LabelComponent from './LabelComponent';

/**
  *	Input & Label React presentational component.
  */
class App extends Component {
  /**
  * Render
  */
  render(){
    return (
      <div className='wrapper' >
        <h2>Hello, I'm your Component</h2>
        <InputComponent />
        <LabelComponent label = "My label goes here" />
      </div>
    )
  }
}

export default App;
