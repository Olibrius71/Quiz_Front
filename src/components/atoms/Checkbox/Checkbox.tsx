import React from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
  width: 1rem;  /* 16px */
  height: 1rem;
  border-radius: 0.25rem;
  border: 2px solid ${({ theme }) => theme.border};
  background-color: ${({ checked, theme }) => (checked ? theme.primary : theme.background)};
  cursor: pointer;
  appearance: none;
  outline: none;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:checked {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.info}88;
  }

  /* coche personnalisée */
  &:checked::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 4px;
    height: 8px;
    border: solid ${({ theme }) => theme.background};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return <StyledCheckbox checked={checked} onChange={onChange} />;
}
