import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import ContainerQuiz from '../../atoms/Container/ContainerQuiz'; // Assure-toi que le chemin est correct

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
  error?: string;
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  box-sizing: border-box;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.error};
  margin: -1rem 0 0.5rem;
  font-size: 0.9rem;
`;

export default function LoginForm({ onSubmit, loading, error }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Email requis';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email invalide';
    if (!password) newErrors.password = 'Mot de passe requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(email, password);
    }
  };

  return (
    <ContainerQuiz>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <Input
          id="password"
          type="password"
          label="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Connexion...' : 'Se connecter'}
        </Button>
      </FormWrapper>
    </ContainerQuiz>
  );
}