import React, { useState } from 'react';
import QuestionBlock from '../../molecules/Question/QuestionBlock';
import Button from '../../atoms/Button/Button';
import QuizModel from '../../../data/QuizModel';
import QuestionModel from '../../../data/QuestionModel';
import ButtonGroup from '../../atoms/Button/ButtonGroup';
import QuizService from '../../../services/QuizService';

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
    const newQuestion: QuestionModel = {
      id: Date.now(),
      question: '',
      timeToAnswer: 30,
      answers: [
        {
          id: 1,
          text: '',
          isCorrect: false,
          questionId: Date.now(),
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
      console.error("Erreur lors de la création du quiz :", error);
    }
  };

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto h-auto">
      <h1 className="text-3xl font-bold">Créer votre Quiz</h1>

      <input
        type="text"
        placeholder="Nom du quiz"
        value={quiz.title}
        onChange={handleTitleChange}
        className="w-full rounded px-3 py-2 text-sm mb-4"
        style={{
          border: '1px solid #a0aec0',
          color: '#1E90FF',
          outline: 'none',
          transition: 'box-shadow 0.2s ease',
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 144, 255, 0.5)';
          e.currentTarget.style.borderColor = '#1E90FF';
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = '#a0aec0';
        }}
      />


      <textarea
        placeholder="Description du quiz"
        value={quiz.description}
        onChange={handleDescriptionChange}
        className="w-full rounded px-3 py-2 text-sm mb-4 resize-none"
        rows={4}
        style={{
          border: '1px solid #a0aec0',
          color: '#1E90FF',
          outline: 'none',
          transition: 'box-shadow 0.2s ease',
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 144, 255, 0.5)';
          e.currentTarget.style.borderColor = '#1E90FF';
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = '#a0aec0';
        }}
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
    </div>
  );
}