import React, { Component } from 'react';
import ColorDisplay from '../components/color-display/ColorDisplay';

export default class ColorGenerator extends Component {
  state = {
    selectedColor: 'red'
  }

  handleColorChange = color => {
    this.setState({ selectedColor: color });
  }
  

  render() {
    const colors = [
      'red',
      'orange', 
      'yellow', 
      'green', 
      'blue', 
      'indigo', 
      'violet'
    ];
    return (
      <ColorDisplay backgroundColor={this.state.selectedColor} />
    );
  }
}
