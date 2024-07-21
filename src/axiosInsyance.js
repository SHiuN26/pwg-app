import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://api-for-testing-gujp.onrender.com/",
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 5秒超時
});

// 設置請求攔截器，將 JWT Token 添加到請求頭部
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 假設 JWT Token 存儲在 localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
