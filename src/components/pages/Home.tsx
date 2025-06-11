import React from 'react';
import Container from "../atoms/Container";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

const Home = () => {
  return (
    <Container.Base width="100%">
      <h1>Vite + React</h1>

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
  );
};

export default Home;