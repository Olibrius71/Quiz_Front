import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px 25px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

type AuthContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function AuthContainer({ title, children }: AuthContainerProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
