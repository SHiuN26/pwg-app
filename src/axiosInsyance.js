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

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      // 檢查是否是登入請求
      const isLoginRequest = error.config.url.includes("/login");

      if (!isLoginRequest) {
        // 只有在非登入請求的情況下才清除token並重定向
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        window.location.href = "/login"; // 重定向到登入頁
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
