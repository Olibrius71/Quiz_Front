import styled from 'styled-components';
import Button  from '../../atoms/Button';

type AnswerProps = {
  answer: string;
  onClick: () => void;
  isSelected?: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  disabled?: boolean;
};

const AnswerButton = styled(Button.Base)<{
  $isSelected?: boolean;
  $isCorrect?: boolean;
  $isIncorrect?: boolean;
}>`
  width: 100%;
  text-align: left;
  justify-content: flex-start;
  padding: 1rem;
  font-size: 1.1rem;
  transition: all 0.2s ease;

  &:hover {
    transform: ${({ disabled }) => !disabled && 'translateY(-2px)'};
    box-shadow: ${({ disabled }) =>
  !disabled && '0 4px 8px rgba(0, 0, 0, 0.1)'};
  }

  ${({ $isSelected }) =>
  $isSelected && `
      background-color: dodgerblue; //TODO $ {theme.primary};
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `}

  ${({ $isCorrect }) =>
  $isCorrect && `
      background-color: green; //TODO $ {theme.success};
      color: white;
    `}

  ${({ $isIncorrect }) =>
  $isIncorrect && `
      background-color: red; //TODO $ {theme.error};
      color: white;
    `}
`;

const Answer: React.FC<AnswerProps> = ({
  answer,
  onClick,
  isSelected = false,
  isCorrect = false,
  isIncorrect = false,
  disabled = false,
}) => {
  return (
    <AnswerButton
      onClick={onClick}
      disabled={disabled}
      $isSelected={isSelected}
      $isCorrect={isCorrect}
      $isIncorrect={isIncorrect}
    >
      {answer}
    </AnswerButton>
  );
};

export default Answer;