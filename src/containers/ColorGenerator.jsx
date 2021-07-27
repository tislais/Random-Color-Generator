import React, { Component } from 'react';
import ColorDisplay from '../components/color-display/ColorDisplay';
  
const colors = [
  'red',
  'orange', 
  '#b4d455',
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

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedColor === this.state.selectedColor) {
      this.setState({ selectedColor: 'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")' });
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
