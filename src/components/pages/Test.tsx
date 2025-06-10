import React from "react";
import { Container } from "../atoms";
import { Button } from "../molecules";
const Test = () => {
  return (
    <Container.Base>
      {" "}
      <Button.Switch
        callBack={() => {
          alert("Bonjour");
        }}
      >
        BOUTTON
      </Button.Switch>
    </Container.Base>
  );
};

export default Test;
