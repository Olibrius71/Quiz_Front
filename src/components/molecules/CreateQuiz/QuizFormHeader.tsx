import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Textarea from '../../atoms/Input/Textarea';

interface QuizFormHeaderProps {
  title: string;
  description: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

export default function QuizFormHeader({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
}: QuizFormHeaderProps) {
  return (
    <HeaderWrapper>
      <Input
        id="quiz-title"
        label="Titre du quiz"
        value={title}
        onChange={onTitleChange}
        placeholder="Nom du quiz"
      />
      <Textarea
        id="quiz-description"
        label="Description"
        value={description}
        onChange={onDescriptionChange}
        placeholder="Description du quiz"
        rows={4}
      />
    </HeaderWrapper>
  );
}