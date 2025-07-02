import React, { useState } from 'react';
import AuthContainer from '../atoms/Container/AuthContainer';
import SignupForm from '../molecules/Connexion/SignupForm';
import PageWrapper from '../atoms/Container/PageWrapper';


interface SignupPageProps {
  setSlug: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignupPage({ setSlug }: SignupPageProps) {
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
        alert('Compte créé avec succès !');
        setLoading(false);
        setSlug('login');
      }
    }, 1500);
  };

  return (
    <PageWrapper>
      <AuthContainer title="Créer un compte">
        <SignupForm onSubmit={handleSignup} loading={loading} error={error} />
        <button
          style={{ marginTop: 16, background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
          onClick={() => setSlug('login')}
        >
          Retour à la connexion
        </button>
      </AuthContainer>
    </PageWrapper>
  );
}