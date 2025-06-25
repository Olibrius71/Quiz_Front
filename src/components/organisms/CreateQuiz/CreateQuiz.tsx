import React, { useState } from 'react';
import QuestionBlock from '../../molecules/Question/QuestionBlock';

type Answer = {
  id: number;
  text: string;
  correct: boolean;
};

type Question = {
  id: number;
  text: string;
  timeLimit: number;
  answers: Answer[];
};

export default function CreateQuizPage() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        text: '',
        timeLimit: 30,
        answers: [{ id: 1, text: '', correct: false }],
      },
    ]);
  };

  const updateQuestion = (index: number, updated: Question) => {
    const newQuestions = [...questions];
    newQuestions[index] = updated;
    setQuestions(newQuestions);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Quiz soumis :', { title, questions });
  };

  const dodgerBlue = '#1E90FF';

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Créer votre Quiz</h1>

<input
  type="text"
  placeholder="Nom du quiz"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
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


      {questions.map((q, idx) => (
        <QuestionBlock
          key={q.id}
          question={q}
          index={idx}
          updateQuestion={updateQuestion}
          removeQuestion={removeQuestion}
        />
      ))}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={addQuestion}
          style={{ backgroundColor: dodgerBlue }}
          className="text-white px-5 py-2 rounded hover:brightness-110 transition"
        >
          Ajouter une question
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!questions.length || !title.trim()}
          style={{ backgroundColor: dodgerBlue }}
          className={`text-white px-5 py-2 rounded transition ${
            !questions.length || !title.trim()
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:brightness-110'
          }`}
        >
          Enregistrer le quiz
        </button>
      </div>
    </div>
  );
}
