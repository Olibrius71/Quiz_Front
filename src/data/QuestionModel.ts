interface QuestionModel {
  id: number;
  question: string;
  answers: { text: string; isCorrect: boolean }[];
  timeToAnswer?: number;
  mediaUrl?: string;
}

export default QuestionModel