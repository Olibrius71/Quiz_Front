import React, {useEffect, useState} from 'react';
import Button from '../../atoms/Button';

type AnswerProps = {
  answer: string;
  onClick: () => void;
  isSelected?: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  disabled?: boolean;
};

const Answer: React.FC<AnswerProps> = ({
  answer,
  onClick,
  isSelected = false,
  isCorrect = false,
  isIncorrect = false,
  disabled = false,
}) => {
  // Determine variant based on state
  const getVariant = () => {
    if (isCorrect) return 'correct';
    if (isIncorrect) return 'incorrect';
    if (isSelected) return 'selected';
    return 'default';
  };
  const [variant, setVariant] = useState<any>(getVariant());
  useEffect(() => {
    setVariant(getVariant());
  }, [isCorrect, isIncorrect, isSelected]);

  console.log({answer, isSelected, isCorrect, isIncorrect, disabled});

  return (
    <Button.Base
      onClick={() => {setVariant(getVariant()); onClick()} }
      disabled={disabled}
      width="23%"
      variant={variant}
    >
      {answer}
    </Button.Base>
  );
};

export default Answer;