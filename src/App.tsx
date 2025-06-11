import { useState } from 'react'
import './App.css'
import {Button as RadixButton} from "@radix-ui/themes";
import Button from "./components/atoms/Button";
import Container from "./components/atoms/Container";
import Typography from "./components/atoms/Typography";
import {ThemeProviderCustom, useTheme} from "./contexts/ThemeContext.tsx";
import { ThemeProvider } from 'styled-components';
import Home from "./components/pages/Home.tsx";
import {Navigation} from "./components/molecules";
import Test from "./components/pages/Test.tsx";


const menu = [
  {
    slug: "home",
    text: "Home",
    callback: (setSlug) => {
      setSlug("home");
    }
  },
  {
    slug: "test",
    text: "Test",
    callback: (setSlug) => {
      setSlug("test");
    }
  },
];

const AppContent = () => {
  const [currentSlug, setCurrentSlug] = useState('home');

  const getPageContent = () => {
    switch (currentSlug) {
      case 'home':
        return <Home />;
      case 'test':
        return <Test />;
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
  const { theme } = useTheme();

  return (
    <ThemeProviderCustom>
        <AppContent />
    </ThemeProviderCustom>
  );
}

export default App
