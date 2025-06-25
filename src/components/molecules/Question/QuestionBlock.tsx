import React from 'react';
import { Trash2, PlusCircle } from 'lucide-react';
import AnswerField from '../Answer/AnswerField';

type Answer = {
  id: number;
  text: string;
  correct: boolean;
};

type Question = {
  text: string;
  timeLimit: number;
  answers: Answer[];
};

type QuestionBlockProps = {
  question: Question;
  index: number;
  updateQuestion: (index: number, updatedQuestion: Question) => void;
  removeQuestion: (index: number) => void;
};

export default function QuestionBlock({
  question,
  index,
  updateQuestion,
  removeQuestion,
}: QuestionBlockProps) {
  const updateAnswer = (aIdx: number, updatedAnswer: Answer) => {
    const newAnswers = [...question.answers];
    newAnswers[aIdx] = updatedAnswer;
    updateQuestion(index, { ...question, answers: newAnswers });
  };

  const addAnswer = () => {
    updateQuestion(index, {
      ...question,
      answers: [...question.answers, { id: Date.now(), text: '', correct: false }],
    });
  };

  const removeAnswer = (aIdx: number) => {
    updateQuestion(index, {
      ...question,
      answers: question.answers.filter((_, i) => i !== aIdx),
    });
  };

  const dodgerBlue = '#1E90FF';
  const dodgerBlueDark = '#1A76D2';
  const dodgerBlueLight = '#85B7FF';
  const dodgerBlueFocus = '#3B99FF';
  const dodgerBlueBgGradientFrom = 'rgba(30, 144, 255, 0.1)';
  const dodgerBlueBgGradientTo = 'rgba(30, 144, 255, 0.05)';

  return (
    <div
      className="border rounded-lg p-6 shadow-lg space-y-6"
      style={{
        borderColor: dodgerBlueLight,
        background: `linear-gradient(to bottom right, ${dodgerBlueBgGradientFrom}, ${dodgerBlueBgGradientTo})`,
      }}
    >
      <div className="flex justify-between items-center">
        <h2
          className="text-2xl font-bold"
          style={{ color: dodgerBlueDark }}
        >
          Question {index + 1}
        </h2>
        <button
          type="button"
          onClick={() => removeQuestion(index)}
          style={{ backgroundColor: dodgerBlue }}
          className="p-3 rounded-full text-white hover:brightness-110 transition-colors duration-200"
          aria-label={`Supprimer la question ${index + 1}`}
        >
          <Trash2 className="w-6 h-6 text-white" />
        </button>
      </div>

      <textarea
        placeholder="Intitulé de la question"
        value={question.text}
        onChange={(e) =>
          updateQuestion(index, { ...question, text: e.target.value })
        }
        className="w-full rounded-lg px-4 py-3 text-base resize-none transition"
        style={{
          borderWidth: '2px',
          borderColor: dodgerBlueLight,
          color: dodgerBlueDark,
          outline: 'none',
          boxShadow: 'none',
        }}
        rows={3}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 4px ${dodgerBlueFocus}`;
          e.currentTarget.style.borderColor = dodgerBlueFocus;
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = dodgerBlueLight;
        }}
      />

      <input
        type="number"
        min={5}
        placeholder="Temps limite (secondes)"
        value={question.timeLimit}
        onChange={(e) =>
          updateQuestion(index, {
            ...question,
            timeLimit: parseInt(e.target.value) || 5,
          })
        }
        className="w-full rounded-lg px-4 py-3 text-base transition"
        style={{
          borderWidth: '2px',
          borderColor: dodgerBlueLight,
          color: dodgerBlueDark,
          outline: 'none',
          boxShadow: 'none',
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 4px ${dodgerBlueFocus}`;
          e.currentTarget.style.borderColor = dodgerBlueFocus;
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = dodgerBlueLight;
        }}
      />

      <div className="space-y-3">
        {question.answers.map((a, aIdx) => (
          <AnswerField
            key={a.id}
            answer={a}
            onChangeText={(e) => updateAnswer(aIdx, { ...a, text: e.target.value })}
            onToggleCorrect={(e) =>
              updateAnswer(aIdx, { ...a, correct: e.target.checked })
            }
            onRemove={() => removeAnswer(aIdx)}
            disableRemove={question.answers.length <= 2}
          />
        ))}

        {question.answers.length < 8 && (
          <button
            type="button"
            onClick={addAnswer}
            style={{ backgroundColor: dodgerBlue }}
            className="flex items-center gap-2 text-white font-semibold text-sm rounded px-3 py-1 hover:brightness-110 transition-colors duration-200"
          >
            <PlusCircle className="w-5 h-5" />
            Ajouter une réponse
          </button>
        )}
      </div>
    </div>
  );
}
