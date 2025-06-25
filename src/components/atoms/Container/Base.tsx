import styled, { DefaultTheme, useTheme } from 'styled-components';
import React from 'react';

export type ContainerProps = {
  children: React.ReactNode;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  height?: string;
  gap?: string;
};

const StyledContainer = styled.div<Omit<ContainerProps, 'children'>>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  margin: 0 auto;
  padding: ${({ padding }) => padding || '0 1rem'};

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.background};

  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'space-between'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text};
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};