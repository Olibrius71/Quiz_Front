import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button as RadixButton, Container as Cont} from "@radix-ui/themes";
import Comp from "./components/Comp.tsx";
import { Container } from "./components/atoms";
import { Typography } from "./components/atoms";
import { Button, Menu } from "./components/molecules";
import Accueil from "./components/pages/Accueil.tsx";
import Clock from "./components/pages/Clock.tsx";
import Test from "./components/pages/Test.tsx";


function App() {
  const [slug, setSlug] = useState("home");
  const getPageContent = () => {
    switch (slug) {
      case "test":
        return <Test />;
        break;
      case "clock":
        return <Clock />;
        break;
      case "home":
      default:
        return <Accueil />;
        break;
    }
  };

  return (
    <div className="w-full bg-blue-400 flex flex-col items-center justify-evenly">
      <div className="flex flex-row">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography.Title text="ok ok HBUVHBUHBUUB" />
      <RadixButton>
        BOUTON RADIX-UI
      </RadixButton>
      <Comp/>

      <Button.Base text="BOUTON" />

      <Menu.Bar>
        <Menu.Tab
          callBack={() => {
            setSlug("home");
          }}
        >
          Accueil
        </Menu.Tab>
        <Menu.Tab
          callBack={() => {
            setSlug("clock");
          }}
        >
          Clock
        </Menu.Tab>
        <Menu.Tab
          callBack={() => {
            setSlug("test");
          }}
        >
          Test
        </Menu.Tab>
      </Menu.Bar>
      {slug}
      {getPageContent()}
    </div>
  )
}

export default App
