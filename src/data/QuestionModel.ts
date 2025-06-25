import AnswerModel from "./AnswerModel.ts";

interface QuestionModel {
  id?: number;
  question: string;
  answers: AnswerModel[];
  timeToAnswer?: number;
  mediaUrl?: string;
}

export default QuestionModel