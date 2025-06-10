import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button as RadixButton} from "@radix-ui/themes";
import Button from "./components/atoms/Button";
import Container from "./components/atoms/Container";
import Typography from "./components/atoms/Typography";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container.Base width="100%">
        <h1>Vite + React</h1>

        <RadixButton>
          BOUTON RADIX-UI
        </RadixButton>

        <Container.Base gap="1rem">
          <Button.Base>
            BOUTON
          </Button.Base>

          <Button.Base>
            BOUTON
          </Button.Base>
        </Container.Base>

        <Typography.Title>TITRE</Typography.Title>
      </Container.Base>
    </>
  )
}

export default App
