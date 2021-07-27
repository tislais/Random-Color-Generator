import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor }) => {
  return (
    <>
      <div 
        style={{
          backgroundColor,
          width: '100px',
          height: '100px'
        }}>hi</div>
    </>
  );
};

ColorDisplay.propTypes = {
  backgroundColor: PropTypes.string
};

export default ColorDisplay;
