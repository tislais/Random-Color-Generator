import React, { Component } from 'react';
import ColorDisplay from '../components/color-display/ColorDisplay';
  
const colors = [
  'red',
  'orange', 
  'yellow', 
  'green', 
  'blue', 
  'indigo', 
  'violet'
];

export default class ColorGenerator extends Component {
  state = {
    selectedColor: 'red'
  }
  
  componentDidMount() {
    this.makeTimer();
  }

  makeTimer(){
    setInterval(() => {
      this.setState({ 
        selectedColor: colors[Math.floor(Math.random() * colors.length)] });
    }, 1000);
  }

  render() {
    return (
      <ColorDisplay backgroundColor={this.state.selectedColor} />
    );
  }
}
