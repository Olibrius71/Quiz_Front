interface AnswerModel {
  id?: number;
  text: string;
  isCorrect: boolean;
  questionId: number;
}

export default AnswerModel;