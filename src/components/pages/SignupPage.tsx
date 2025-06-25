import React, { useState } from 'react';
import AuthContainer from '../atoms/Container/AuthContainer';
import SignupForm from '../molecules/Connexion/SignupForm';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSignup = (email: string, password: string, confirmPassword: string) => {
    setLoading(true);
    setError(undefined);

    setTimeout(() => {
      if (email === 'existing@example.com') {
        setError('Cet email est déjà utilisé.');
        setLoading(false);
      } else {
        // TODO : coonexion Api
        alert('Compte créé avec succès !');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <AuthContainer title="Créer un compte">
      <SignupForm onSubmit={handleSignup} loading={loading} error={error} />
    </AuthContainer>
  );
}