import axios from 'axios';
import authService from "./AuthService.ts";

const apiUrl: string = "https://localhost:443/api/";

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15500,
});

// Request Interceptor
apiClient.interceptors.request.use(
  async (config) => {

    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(config.method?.toUpperCase() + " " + config.baseURL + config.url);   //Permet d'afficher l'URL entier et la méthode lors de la requête

    //Permet d'afficher les données envoyées
    //if (config.method?.toUpperCase() === "POST" || config.method?.toUpperCase() === "PATCH" || config.method?.toUpperCase() === "PUT") console.log(Object.entries(config.data));


    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    //console.log(Object.entries(response.data));  Pour afficher les données reçues
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        console.warn('Unauthorized - Redirect to login');
      }
      if (data?.errors) {
        console.warn("API Errors:", data.errors);
      } else {
        console.warn("API Error response:", data);
      }
    } else if (error.request) {
      // No response from server
      console.warn("No response received:", error.request);
    } else {
      // Something else caused the error
      console.warn("Unknown Axios error:", error.message + " - L'erreur est très sûrement Not found - Mauvais URL");
    }

    return Promise.reject(error);
  }
);

export default apiClient;