import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../contexts/ThemeContext';


const Nav = styled.nav`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  height:10%;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled.button<{ $active?: boolean }>`
  color: ${({ theme }) => theme.text};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;

const ThemeToggleButton = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.info};
  }
`;


const Navigation = ({ menu, currentSlug, setSlug }) => {
  const { toggleTheme, mode } = useTheme();

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={() => setSlug('home')}>Quiz App</Logo>
        <NavLinks>
          {menu.map((item) => (
            <NavLink
              key={item.slug}
              onClick={() => item.callback(setSlug)}
              $active={item.slug === currentSlug}
            >
              {item.text}
            </NavLink>
          ))}
          <ThemeToggleButton onClick={toggleTheme}>
            {mode === 'light' ? '🌙' : '☀️'}
          </ThemeToggleButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
