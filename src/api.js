import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance
const api = axios.create({
    baseURL: '/api', // Your API base URL
  });

// Add a request interceptor
  api.interceptors.request.use(
    (config) => {
      // Get the token from cookies
      const token = Cookies.get('accessToken');

      if (token) {
        // Attach the token to the Authorization header
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      // Handle the error
      return Promise.reject(error);
    }
  );


// Optionally, add a response interceptor for handling responses
   api.interceptors.response.use(
    (response) => {
      // Do something with response data if needed
      return response;
    },
    (error) => {
      // Handle response errors
      if (error.response && error.response.status === 401) {
        // Handle unauthorized errors (e.g., redirect to login)
        console.error('Unauthorized, please log in again');
      }
      return Promise.reject(error);
    }
  );
  
  export default api;