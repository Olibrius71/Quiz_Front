import React from 'react';
import {Container, Typography} from "../../atoms";


const Task = (isDone, name) => {
  return (
    <Container.Flex>
      <Typography.Paragraph text={isDone ? "Done" : "Not done" + "   ---   " + name} />
    </Container.Flex>
  );
};

export default Task;