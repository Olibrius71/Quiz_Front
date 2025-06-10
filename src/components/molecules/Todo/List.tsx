import React from 'react';
import Container from "../../atoms/Container";

const List = (children) => {
  return (
    <Container.Base>
      {children}
    </Container.Base>
  );
};

export default List;