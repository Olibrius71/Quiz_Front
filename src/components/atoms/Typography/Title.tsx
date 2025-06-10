import styled from 'styled-components';
import React from 'react';

type TitleProps = {
  children: React.ReactNode;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  bold?: boolean;
};

const StyledTitle = styled.h1<TitleProps>`
  font-size: ${({ size }) => {
  switch (size) {
    case 'xl': return '2.6rem';
    case 'lg': return '2.1rem';
    case 'sm': return '1.8rem';
    default: return '1.6rem'; // md
  }
}};
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  margin: 0;
  padding: 0;
  line-height: 1.3;
`;

const Title: React.FC<TitleProps> = ({
  children,
  size = 'md',
  bold = true
}) => {
  return (
    <StyledTitle size={size} bold={bold}>
      {children}
    </StyledTitle>
  );
};

export default Title;