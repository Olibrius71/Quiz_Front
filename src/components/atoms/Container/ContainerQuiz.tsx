import React from 'react';
import styled, { useTheme } from 'styled-components';

export type ContainerQuizProps = {
  children: React.ReactNode;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  height?: string;
  gap?: string;
  maxWidth?: string;
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
};

const StyledContainer = styled.div<Omit<ContainerQuizProps, 'children'>>`
  width: ${({ width }) => width || '100%'};
  min-height: 100%;
  height: ${({ height }) => height || 'fit-content'};
  margin: 0 auto;
  padding: ${({ padding }) => padding || '2rem'};

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.background};

  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  gap: ${({ gap }) => gap || '1.5rem'};

  box-sizing: border-box;
`;

const ContentWrapper = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '1024px'};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContainerQuiz: React.FC<ContainerQuizProps> = ({
  children,
  maxWidth,
  ...props
}) => {
  const theme = useTheme();

  return (
    <StyledContainer {...props}>
      <ContentWrapper maxWidth={maxWidth}>{children}</ContentWrapper>
    </StyledContainer>
  );
};

export default ContainerQuiz;