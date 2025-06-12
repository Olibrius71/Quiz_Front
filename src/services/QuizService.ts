import apiClient from "./apiClient.ts";

class QuizService {
  async getQuizes() {
    const response = await apiClient.get("/Quizes/getAll");
    return response.data;
  }
}

export default new QuizService();