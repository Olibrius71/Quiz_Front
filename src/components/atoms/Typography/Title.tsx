import React from 'react';

const Title = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <h1 className={`text-3xl font-bold underline ${className}`}>
      {text}
    </h1>
  );
};
export default Title;