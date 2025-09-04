import axios from "axios";

// const BASE_URL = "http://74.50.120.38:8000/api";
// const BASE_URL = "https://mypilotlogbook.it/api";
const BASE_URL = "http://127.0.0.1:8000/api";

const apiPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔒 Attach access token to every request
apiPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔁 Automatically refresh token if expired
apiPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes('/auth/login/')) {
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");
      if (!refresh) {
        console.error("No refresh token found.");
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(`${BASE_URL}/auth/token/refresh/`, {
          refresh,
        });

        const newAccess = res.data.access;
        localStorage.setItem("access", newAccess);

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return apiPrivate(originalRequest);
      } catch (err) {
        console.error("Refresh failed. Logging out.");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        window.location.href = "/login";
        return Promise.reject(err);
      }
    }
    

    return Promise.reject(error);
  }
);

export default apiPrivate;
