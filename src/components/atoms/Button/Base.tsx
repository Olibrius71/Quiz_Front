import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
};

const StyledButton = styled.button<ButtonProps>`
    padding: 8px 16px;
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: ${(props) => props.width || 'fit-content'};

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  width,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} width={width}>
      {children}
    </StyledButton>
  );
};