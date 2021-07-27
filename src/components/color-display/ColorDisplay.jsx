import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor }) => {
  return (
    <>
      <div className="color-block"
        style={{
          background: backgroundColor
        }}>beans.</div>
    </>
  );
};

ColorDisplay.propTypes = {
  backgroundColor: PropTypes.string
};

export default ColorDisplay;
