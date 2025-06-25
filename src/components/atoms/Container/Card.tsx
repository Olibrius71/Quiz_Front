import React from 'react';
import styled from 'styled-components';
import { Container, ContainerProps } from './Base';

const StyledCardContainer = styled(Container)<ContainerProps>`
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.replace('0.1', '0.3')};
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;

export const ContainerCard: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledCardContainer {...props}>{children}</StyledCardContainer>;
};