import React, { Component } from 'react';
import ColorDisplay from '../components/color-display/ColorDisplay';

export default class ColorGenerator extends Component {
  state = {
    selectedColor: 'red'
  }

  handleColorChange = color => {
    this.setState({ selectedColor: color });
  }
  
  componentDidMount() {
    const colors = [
      'red',
      'orange', 
      'yellow', 
      'green', 
      'blue', 
      'indigo', 
      'violet'
    ];

    this.setState({ selectedColor: 
      colors[Math.floor(Math.random() * colors.length)] });

  }

  render() {
    return (
      <ColorDisplay backgroundColor={this.state.selectedColor} />
    );
  }
}
