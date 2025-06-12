import React from 'react';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";

const QuizCard = ({ quiz, handleStart }: { quiz: any; handleStart: () => void }) => {
  return (
    <Container.Card justify="space-evenly" width="300px" gap="12px" padding="15px">
      <Typography.Title>
        {quiz.title}
      </Typography.Title>

      <Typography.Paragraph>
        {quiz.description}
      </Typography.Paragraph>

      <Typography.Paragraph>
        {quiz.questions.length} question{quiz.questions.length > 1 ? 's' : ''}
      </Typography.Paragraph>

      <Button.Base
        onClick={handleStart}
        width="100%"
      >
        Commencer le quiz
      </Button.Base>
    </Container.Card>
  );
};

export default QuizCard;