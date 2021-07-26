import React, { Component } from 'react';

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
      <>
        {colors.map((color) => (
          <div key={color}>{color}</div>
        ))}
      </>
    );
  }
}
