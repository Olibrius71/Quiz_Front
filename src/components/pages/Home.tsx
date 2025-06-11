import React from 'react';
import Container from "../atoms/Container";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import QuizContainer from "../organisms/QuizContainer.tsx";

const Home = () => {
  return (
    <Container.Base width="100%">
      <QuizContainer />
    </Container.Base>
  );
};

export default Home;