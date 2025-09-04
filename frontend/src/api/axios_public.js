import axios from "axios";

// Base URL for your API
// const BASE_URL = "https://mypilotlogbook.it/api";
const BASE_URL = "http://127.0.0.1:8000/api";

// Create axios instance
const apiPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Public API error:", error);
    return Promise.reject(error);
  }
);

export default apiPublic;
