import styled from 'styled-components';
import React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  color?: string;
  align?: 'left' | 'center' | 'right';
};

const StyledParagraph = styled.p<ParagraphProps>`
  font-size: ${({ size }) => {
  switch (size) {
    case 'lg': return '1.1rem';
    case 'sm': return '0.85rem';
    default: return '1rem'; // md
  }
}};
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align || 'left'};
  margin: 0;
  padding: 0;
  line-height: 1.5;
`;

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'md',
  ...props
}) => {
  return (
    <StyledParagraph size={size} {...props}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;