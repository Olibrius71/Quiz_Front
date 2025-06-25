import React, { useState } from 'react';
import AuthContainer from '../organisms/Connexion/AuthContainer';
import LoginForm from '../molecules/Connexion/LoginForm';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

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
    <AuthContainer title="Connexion">
      <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
    </AuthContainer>
  );
}
