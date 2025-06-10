import React from 'react';
import {Container, Typography} from "../atoms";

const Accueil = () => {
  return (
    <Container.Base>
      <Typography.Title text="Accueil" />
      <Container.FadeIn />
      <Container.FadeInStyledComp />
    </Container.Base>
  );
};

export default Accueil;