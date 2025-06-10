import React from "react";
import { Container, Typography } from "../../atoms";

const Tab = ({ callBack, children }) => {
  return (
    <Container.Base onClick={callBack}>
      <Typography.Title text={children} className="cursor-pointer"/>
    </Container.Base>
  );
};

export default Tab;
