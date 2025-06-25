import QuestionModel from "./QuestionModel.ts";

interface QuizModel {
  id?: number;
  title: string;
  description?: string;
  questions: QuestionModel[];
}

export default QuizModel;