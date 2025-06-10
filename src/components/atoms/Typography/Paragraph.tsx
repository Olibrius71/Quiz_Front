import React from 'react';

const Paragraph = ({ text, color = 'blue' }) => {
  return (
    <p style={{ color }}>
      {text}
    </p>
  );
};

export default Paragraph;