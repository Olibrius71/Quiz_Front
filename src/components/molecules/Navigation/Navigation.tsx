import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: whitesmoke;// TODO $ {props => props.theme.background};
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  color: dodgerblue; // TODO $ {props => props.theme.text}; 
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.button`
  color: lime; // TODO $ {props => props.theme.text};
  text-decoration: none;
  font-weight: normal; // TODO $ {props => props.$active ? 'bold' : 'normal'};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: red;// TODO $ {props => props.theme.background};
  }
`;

const Navigation = ({ menu, currentSlug, setSlug }) => {

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={() => setSlug('home')}>Quiz App</Logo>
        <NavLinks>
          {menu.map((item) => (
            <NavLink
              key={item.slug}
              onClick={() => item.callback(setSlug)}
            >
              {item.text}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;