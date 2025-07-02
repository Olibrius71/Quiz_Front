import apiClient from "./apiClient.ts";
import QuizModel from "../data/QuizModel.ts";
import {quizListExample} from "../data/constants.ts";

class QuizService {
  async getAllQuizes() {
    try {
      const response = await apiClient.get("v1/quizz/");
      if (response.data) {
        return response.data;
      }
    } catch (error) {}
    finally {
      return quizListExample;
    }
  }

  async getQuiz(id: number) {
    const response = await apiClient.get(`v1/quizz/${id}`);
    return response.data;
  }

  async createQuiz(quiz: QuizModel) {
    const response = await apiClient.post("v1/quizz/create", quiz);
    return response.data;
  }

  async updateQuiz(quiz: QuizModel) {
    const response = await apiClient.patch(`v1/quizz/${quiz.id}`, quiz);
    return response.data;
  }

  async deleteQuiz(id: number) {
    const response = await apiClient.delete(`v1/quizz/${id}`);
    return response.data;
  }
}

export default new QuizService();