import { useState, useEffect } from 'react';
import Typography from '../atoms/Typography';
import Container from "../atoms/Container";
import {Question, Answer} from "../molecules";
import Button from "../atoms/Button";
import QuizModel from "../../data/QuizModel.ts";


const QuizContainer = ({quiz, handleLeave}: {quiz: QuizModel, handleLeave: () => void}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(quiz.questions[0].timeToAnswer || 30);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    if (!isAnswered && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isAnswered]);

  useEffect(() => {
    if (timeLeft === 0 && !isAnswered) {
      handleAnswerSelect(null);
    }
  }, [timeLeft]);

  const handleAnswerSelect = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    setTimeout(() => {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setTimeLeft(quiz.questions[currentQuestionIndex].timeToAnswer || 30);
      } else {
        handleLeave();  // Quand on arrive à la fin du quiz
      }
    }, 2000);
  };

  const handleQuit = () => {
    if (window.confirm('Êtes-vous sûr de vouloir quitter le quiz ?')) {
      handleLeave();
    }
  };

  if (!quiz) return null;

  return (
    <Container.Base gap="2rem" padding="2rem">
      <Container.Base>
        <Typography.Title size="lg">
          Question {currentQuestionIndex + 1}/{quiz.questions.length}
        </Typography.Title>
        <Button.Base onClick={handleQuit}>
          Quitter
        </Button.Base>
      </Container.Base>

      <Question
        question={currentQuestion.question}
        mediaUrl={currentQuestion.mediaUrl}
        timeLeft={timeLeft}
      />

      <Container.Base width="80%" direction="row" >
        {currentQuestion.answers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer.text}
            isSelected={selectedAnswer === index}
            isCorrect={isAnswered && answer.isCorrect}
            isIncorrect={isAnswered && selectedAnswer === index && !answer.isCorrect}
            onClick={() => handleAnswerSelect(index)}
            disabled={isAnswered}
          />
        ))}
      </Container.Base>
    </Container.Base>
  );
};

export default QuizContainer;