import React, { useState } from 'react';
import AuthContainer from '../atoms/Container/AuthContainer';
import PageWrapper from '../atoms/Container/PageWrapper';
import LoginForm from '../molecules/Connexion/LoginForm';

interface LoginPageProps {
  onLoginSuccess: () => void;
  setSlug: (slug: string) => void;
}

export default function LoginPage({ onLoginSuccess, setSlug }: LoginPageProps) {
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
        <LoginForm
          onSubmit={handleLogin}
          loading={loading}
          error={error}
          setSlug={setSlug}
        />
      </AuthContainer>
    </PageWrapper>
  );
}