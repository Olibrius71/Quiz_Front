import React from 'react';
import styled from 'styled-components';

type LinkProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  href?: string;
  className?: string;
};

const StyledLink = styled.a`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: underline;
`;

export default function Link({ children, onClick, href = '#', className }: LinkProps) {
  return (
    <StyledLink href={href} onClick={onClick} className={className}>
      {children}
    </StyledLink>
  );
}