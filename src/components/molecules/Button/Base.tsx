import React from 'react';
import { Container } from "../../atoms";
import Title from "../../atoms/Typography/Title";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  text: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Base: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  text,
  disabled = false
}) => {
  return (
    <Container.Base
      className={`px-12 py-3 bg-red-500 rounded-xl cursor-pointer hover:bg-red-600 transition-colors ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Title text={text} />
    </Container.Base>
  );
};

export default Base;