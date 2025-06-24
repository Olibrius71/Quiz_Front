import {useEffect, useState} from 'react';
import Container from "../atoms/Container";
import Typography from '../atoms/Typography';
import {quizListExample} from "../../data/constants.ts";
import QuizCard from "../molecules/QuizCard/QuizCard.tsx";
import QuizModel from "../../data/QuizModel.ts";
import QuizService from "../../services/QuizService.ts";

const QuizesList = ({handleStartQuiz}: {handleStartQuiz: (quiz: QuizModel) => void})=> {
  const [quizes, setQuizes] = useState<QuizModel[]>();

  useEffect(() => {
    QuizService.getAllQuizes().then((quizes) => {
      setQuizes(quizes);
    });
  }, []);

  return (
    <Container.Base gap="2rem">
      <Typography.Title>LISTE DES QUIZ DISPONIBLES</Typography.Title>
      <Container.Base direction="row">
        {quizes?.map((quiz: QuizModel) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
            handleStart={() => handleStartQuiz(quiz)}
          />
        ))}
      </Container.Base>
    </Container.Base>
  );
};

export default QuizesList;