import React from 'react';
import styled from 'styled-components';
import { Container, ContainerProps } from './Base';

const StyledCardContainer = styled(Container)<ContainerProps>`
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`;

export const ContainerCard: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledCardContainer {...props}>{children}</StyledCardContainer>;
};