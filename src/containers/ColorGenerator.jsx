import React, { Component } from 'react';
import ColorDisplay from '../components/color-display/ColorDisplay';
  
const colors = [
  'red',
  'orange', 
];

export default class ColorGenerator extends Component {
  state = {
    selectedColor: 'red'
  }
  
  componentDidMount() {
    this.makeTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedColor === this.state.selectedColor) {
      this.setState({ selectedColor: '#666' });
    }
  }

  makeTimer(){
    setInterval(() => {
      const random = colors[Math.floor(Math.random() * colors.length)];
      this.setState({ selectedColor: random });
    }, 1000);
  }

  render() {
    return (
      <ColorDisplay backgroundColor={this.state.selectedColor} />
    );
  }
}
