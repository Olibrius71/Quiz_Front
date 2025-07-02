import apiClient from "./apiClient.ts";

const TOKEN_KEY = "AUTH_TOKEN";

class AuthService {
  async login(username: string, password: string) {
    const response = await apiClient.post("/api/login_check", { username, password });
    const token = response.data.token;
    localStorage.setItem(TOKEN_KEY, token);
    return token;
  };

  async signup(username: string, password: string) {
    return apiClient.post("/api/register", { username, password }); // only if backend supports it
  };

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  };

  getToken() {
    localStorage.getItem(TOKEN_KEY);
  }

  async getMe() {
    const response = await apiClient.get("/api/me");
    return response.data;
  };

  isAuthenticated() {
    !!localStorage.getItem(TOKEN_KEY);
  }
}

export default new AuthService();