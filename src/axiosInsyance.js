import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-for-testing-gujp.onrender.com/",
  timeout: 10000, // 5秒超時
});

// 設置 JWT Token
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export default axiosInstance;
