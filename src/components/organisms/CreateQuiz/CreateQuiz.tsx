import React, { useState } from 'react';
import styled from 'styled-components';

import QuizModel from '../../../data/QuizModel';
import QuestionModel from '../../../data/QuestionModel';
import QuizService from '../../../services/QuizService';

import Container from '../../atoms/Container/ContainerQuiz';
import QuestionBlock from '../../molecules/Question/QuestionBlock';
import QuizFormHeader from '../../molecules/CreateQuiz/QuizFormHeader';
import Button from '../../atoms/Button/Button';
import ButtonGroup from '../../atoms/Button/ButtonGroup';

const Title = styled.h1`
  font-size: 1.875rem; // text-3xl
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

export default function CreateQuizPage() {
  const [quiz, setQuiz] = useState<QuizModel>({
    title: '',
    description: '',
    questions: [],
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({ ...quiz, title: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuiz({ ...quiz, description: e.target.value });
  };

  const addQuestion = () => {
    const timestamp = Date.now();
    const newQuestion: QuestionModel = {
      id: timestamp,
      question: '',
      timeToAnswer: 30,
      answers: [
        {
          id: 1,
          text: '',
          isCorrect: false,
          questionId: timestamp,
        },
      ],
    };
    setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
  };

  const updateQuestion = (index: number, updated: QuestionModel) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index] = updated;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const removeQuestion = (index: number) => {
    const updatedQuestions = quiz.questions.filter((_, i) => i !== index);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleSubmit = async () => {
    try {
      const response = await QuizService.createQuiz(quiz);
      console.log('Quiz créé avec succès :', response);
    } catch (error) {
      console.error('Erreur lors de la création du quiz :', error);
    }
  };

  return (
    <Container>
      <Title>Créer votre Quiz</Title>

      <QuizFormHeader
        title={quiz.title}
        description={quiz.description}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
      />

      {quiz.questions.map((q, idx) => (
        <QuestionBlock
          key={q.id}
          question={q}
          index={idx}
          updateQuestion={updateQuestion}
          removeQuestion={removeQuestion}
        />
      ))}

      <ButtonGroup>
        <Button onClick={addQuestion}>Ajouter une question</Button>
        <Button
          onClick={handleSubmit}
          disabled={!quiz.questions.length || !quiz.title.trim()}
        >
          Enregistrer le quiz
        </Button>
      </ButtonGroup>
    </Container>
  );
}