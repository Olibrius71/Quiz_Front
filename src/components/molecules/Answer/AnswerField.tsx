import React from 'react';
import { Trash2 } from 'lucide-react';

type Answer = {
  text: string;
  correct: boolean;
};

type AnswerFieldProps = {
  answer: Answer;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleCorrect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  disableRemove?: boolean;
};

export default function AnswerField({
  answer,
  onChangeText,
  onToggleCorrect,
  onRemove,
  disableRemove,
}: AnswerFieldProps) {
  const dodgerBlue = '#1E90FF';

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={answer.text}
        onChange={onChangeText}
        placeholder="Réponse"
        className="flex-1 rounded px-3 py-2 text-sm"
        style={{
          border: '1px solid #a0aec0',
          color: dodgerBlue,
          outline: 'none',
          transition: 'box-shadow 0.2s ease',
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 3px rgba(30, 144, 255, 0.5)`;
          e.currentTarget.style.borderColor = dodgerBlue;
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = '#a0aec0';
        }}
      />

      <input
        type="checkbox"
        checked={answer.correct}
        onChange={onToggleCorrect}
        style={{
          accentColor: dodgerBlue,
          borderColor: '#a0aec0',
          borderRadius: '0.25rem',
          width: '1rem',
          height: '1rem',
        }}
      />

      <button
        type="button"
        onClick={onRemove}
        disabled={disableRemove}
        style={{ backgroundColor: dodgerBlue }}
        className="p-3 rounded-full text-white hover:brightness-110 transition-colors duration-200 disabled:opacity-50"
      >
        <Trash2 className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
