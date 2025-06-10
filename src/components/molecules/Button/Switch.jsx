import React, { useState } from "react";
import { Container, Typography } from "../../atoms";

const Switch = ({ callBack = () => {}, ...props }) => {
  const primary = "orangered";
  const secondary = "lime";
  const [isOn, setIsOn] = useState(true);
  
  return (
    <Container.Base bg={isOn ? secondary : primary}>
      <Typography.Paragraph
        onClick={() => {
          callBack();
          setIsOn(!isOn);
        }}
        color={isOn ? primary : secondary}
        {...props}
      />
    </Container.Base>
  );
};

export default Switch;
