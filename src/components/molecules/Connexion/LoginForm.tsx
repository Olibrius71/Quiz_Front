import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Link from '../../atoms/Link/Link';

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
  error?: string;
  setSlug: (slug: string) => void;
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.error || 'red'};
  margin: -1rem 0 0.5rem;
  font-size: 0.9rem;
  text-align: center;
`;

const BottomText = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const ThemedLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primaryHover || theme.primary};
  }
`;

export default function LoginForm({ onSubmit, loading, error, setSlug }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const theme = useTheme();

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
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        id="email"
        type="email"
        label="Email"
        labelColor={theme.text}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <Input
        id="password"
        type="password"
        label="Mot de passe"
        labelColor={theme.text}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button type="submit" disabled={loading}>
        {loading ? 'Connexion...' : 'Se connecter'}
      </Button>
      <BottomText>
        Pas encore de compte ?{' '}
        <ThemedLink
          onClick={(e) => {
            e.preventDefault();
            setSlug('signup');
          }}
        >
          Créez-en un
        </ThemedLink>
      </BottomText>
    </FormWrapper>
  );
}