import React from 'react';
import styled from 'styled-components';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ hasError, theme }) => (hasError ? theme.error : '#ccc')};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.3);
  }
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: 600;
`;

const ErrorMsg = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 0.85rem;
  margin-top: 2px;
`;

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <Container>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledInput {...props} hasError={!!error} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Container>
  );
}
