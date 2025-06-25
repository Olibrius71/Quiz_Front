import React, { useState } from 'react';
import AuthContainer from '../atoms/Container/AuthContainer';
import LoginForm from '../molecules/Connexion/LoginForm';
import styled from 'styled-components';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const PageWrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleLogin = (email: string, password: string) => {
    setLoading(true);
    setError(undefined);

    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === '123456') {
        onLoginSuccess();
      } else {
        setError('Email ou mot de passe incorrect');
      }
    }, 1500);
  };

  return (
    <PageWrapper>
      <AuthContainer title="Connexion">
        <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
      </AuthContainer>
    </PageWrapper>
  );
}