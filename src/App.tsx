import { useState } from 'react';
import './App.css';
import Button from "./components/atoms/Button";
import Container from "./components/atoms/Container";
import Typography from "./components/atoms/Typography";
import { ThemeProviderCustom, useTheme } from "./contexts/ThemeContext.tsx";
import { ThemeProvider } from 'styled-components';
import Home from "./components/pages/Home.tsx";
import { Navigation } from "./components/molecules";
import CreateQuizPage from './components/organisms/CreateQuiz/CreateQuiz';
import LoginPage from './components/pages/LoginPage';


const AppContent = () => {
  const [currentSlug, setCurrentSlug] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentSlug('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentSlug('home');
  };

  const menu = [
    {
      slug: 'home',
      text: 'Home',
      callback: () => setCurrentSlug('home'),
    },
    {
      slug: 'createQuiz',
      text: 'Créer votre quiz',
      callback: () => setCurrentSlug('createQuiz'),
    },
    {
      slug: 'login',
      text: isAuthenticated ? 'Déconnexion' : 'Connexion',
      callback: () => {
        isAuthenticated ? handleLogout() : setCurrentSlug('login');
      },
    },
  ];

  const getPageContent = () => {
    switch (currentSlug) {
      case 'home':
        return <Home />;
      case 'createQuiz':
        return isAuthenticated ? (
          <CreateQuizPage />
        ) : (
          <div className="text-center p-4 text-red-500 font-semibold">
            Veuillez vous connecter pour créer un quiz.
          </div>
        );
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navigation menu={menu} currentSlug={currentSlug} setSlug={setCurrentSlug} />
      {getPageContent()}
    </>
  );
};

const App = () => {
  return (
    <ThemeProviderCustom>
      <AppContent />
    </ThemeProviderCustom>
  );
};

export default App;
