import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
};

const dodgerBlue = '#1E90FF';

function Button({
  children,
  onClick,
  disabled = false,
  className = '',
  style = {},
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: dodgerBlue, ...style }}
      className={`text-white px-5 py-2 rounded transition ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110'
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;