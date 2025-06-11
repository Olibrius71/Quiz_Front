import { useState, useEffect } from 'react';
import Typography from '../atoms/Typography';
import Container from "../atoms/Container";
import {Question, Answer} from "../molecules";
import Button from "../atoms/Button";


const QuizContainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuiz = {
    questions: [
      {
        id: 1,
        question: "Quelle est la capitale de la France ?",
        mediaUrl: "https://example.com/paris.jpg",
        mediaType: "image",
        answers: [
          { text: "Paris", isCorrect: true },
          { text: "Lyon", isCorrect: false },
          { text: "Marseille", isCorrect: false },
          { text: "Bordeaux", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "Quel est le plus grand océan du monde ?",
        mediaUrl: "https://example.com/pacific.mp4",
        mediaType: "video",
        answers: [
          { text: "Océan Atlantique", isCorrect: false },
          { text: "Océan Pacifique", isCorrect: true },
          { text: "Océan Indien", isCorrect: false },
          { text: "Océan Arctique", isCorrect: false },
        ],
      }
    ]
  };
  const currentQuestion = currentQuiz?.questions[currentQuestionIndex];


  const quitQuiz = () => {
    console.error(1234);  //TODO
  };

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
      if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setTimeLeft(30);
      } else {
        quitQuiz();  // Quand on arrive à la fin du quiz
      }
    }, 2000);
  };

  const handleQuit = () => {
    if (window.confirm('Êtes-vous sûr de vouloir quitter le quiz ?')) {
      quitQuiz();
    }
  };

  if (!currentQuiz) return null;

  return (
    <Container.Base gap="2rem" padding="2rem">
      <Container.Base>
        <Typography.Title size="lg">
          Question {currentQuestionIndex + 1}/{currentQuiz.questions.length}
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

      <Container.Base width="80%">
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