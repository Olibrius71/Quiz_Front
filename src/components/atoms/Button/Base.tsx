import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
  variant?: 'default' | 'selected' | 'correct' | 'incorrect';
};

const StyledButton = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${(props) => props.width || 'fit-content'};

  /* Base styles */
  background-color: ${(props) => {
      switch (props.variant) {
          case 'selected':
              return 'dodgerblue';
          case 'correct':
              return 'green';
          case 'incorrect':
              return 'red';
          default:
              return 'dodgerblue';
      }
}};
  
  color: ${(props) => props.variant ? 'white' : 'white'};

  &:hover {
    background-color: ${(props) => {
  if (props.disabled) return '#cccccc';
  switch (props.variant) {
    case 'correct':
      return '#006600';
    case 'incorrect':
      return '#cc0000';
    case 'selected':
        return '#0056b3';
    default:
      return '#0056b3';
  }
}};
    transform: ${({ disabled }) => !disabled && 'translateY(-2px)'};
    box-shadow: ${({ disabled }) => !disabled && '0 4px 8px rgba(0, 0, 0, 0.1)'};
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  ${({ variant }) =>
  variant === 'selected' && `
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  width,
  variant = 'default',
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={variant != "correct" && variant != "incorrect" && disabled}
      width={width}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};