import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Trash2, PlusCircle } from 'lucide-react';
import AnswerField from '../Answer/AnswerField';
import QuestionModel from '../../../data/QuestionModel';
import AnswerModel from '../../../data/AnswerModel';

type QuestionBlockProps = {
  question: QuestionModel;
  index: number;
  updateQuestion: (index: number, updatedQuestion: QuestionModel) => void;
  removeQuestion: (index: number) => void;
};

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.secondary}, ${theme.background})`};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const RemoveBtn = styled.button`
  background-color: ${({ theme }) => theme.primary};
  padding: 0.75rem;
  border-radius: 9999px;
  color: white;
  display: flex;
  align-items: center;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  resize: none;
  background: ${({ theme }) => theme.inputBackground};
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  transition: box-shadow 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}55;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  transition: box-shadow 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}55;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const AddAnswerBtn = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function QuestionBlock({
  question,
  index,
  updateQuestion,
  removeQuestion,
}: QuestionBlockProps) {
  const theme = useTheme();

  const updateAnswer = (aIdx: number, updatedAnswer: AnswerModel) => {
    const newAnswers = [...question.answers];
    newAnswers[aIdx] = updatedAnswer;
    updateQuestion(index, { ...question, answers: newAnswers });
  };

  const addAnswer = () => {
    updateQuestion(index, {
      ...question,
      answers: [
        ...question.answers,
        {
          id: Date.now(),
          text: '',
          isCorrect: false,
          questionId: question.id!,
        },
      ],
    });
  };

  const removeAnswer = (aIdx: number) => {
    updateQuestion(index, {
      ...question,
      answers: question.answers.filter((_, i) => i !== aIdx),
    });
  };

  return (
    <Wrapper>
      <TitleRow>
        <Title>Question {index + 1}</Title>
        <RemoveBtn
          type="button"
          onClick={() => removeQuestion(index)}
          aria-label={`Supprimer la question ${index + 1}`}
        >
          <Trash2 className="w-6 h-6 text-white" />
        </RemoveBtn>
      </TitleRow>

      <StyledTextArea
        placeholder="Intitulé de la question"
        value={question.question}
        onChange={(e) =>
          updateQuestion(index, {
            ...question,
            question: e.target.value,
          })
        }
        rows={3}
      />

      <StyledInput
        type="number"
        min={5}
        placeholder="Temps limite (secondes)"
        value={question.timeToAnswer ?? 30}
        onChange={(e) =>
          updateQuestion(index, {
            ...question,
            timeToAnswer: parseInt(e.target.value) || 30,
          })
        }
      />

      <div className="space-y-3">
        {question.answers.map((a, aIdx) => (
          <AnswerField
            key={a.id}
            answer={{ text: a.text, correct: a.isCorrect }}
            onChangeText={(e) =>
              updateAnswer(aIdx, { ...a, text: e.target.value })
            }
            onToggleCorrect={(e) =>
              updateAnswer(aIdx, { ...a, isCorrect: e.target.checked })
            }
            onRemove={() => removeAnswer(aIdx)}
            disableRemove={question.answers.length <= 2}
          />
        ))}

        {question.answers.length < 8 && (
          <AddAnswerBtn type="button" onClick={addAnswer}>
            <PlusCircle className="w-5 h-5" />
            Ajouter une réponse
          </AddAnswerBtn>
        )}
      </div>
    </Wrapper>
  );
}