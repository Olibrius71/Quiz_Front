import React, { useState } from 'react';
import AuthContainer from '../atoms/Container/AuthContainer';
import PageWrapper from '../atoms/Container/PageWrapper';
import LoginForm from '../molecules/Connexion/LoginForm';
import authService from "../../services/AuthService.ts";

interface LoginPageProps {
  onLoginSuccess: () => void;
  setSlug: (slug: string) => void;
}

export default function LoginPage({ onLoginSuccess, setSlug }: LoginPageProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(undefined);

    await authService.login(email, password)
      .then(() => {
        onLoginSuccess();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    /*
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === '123456') {
        onLoginSuccess();
      } else {
        setError('Email ou mot de passe incorrect');
      }
    }, 1500);
     */
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