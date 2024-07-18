import axiosInstance from "../axiosInsyance";
import MockAdapter from "axios-mock-adapter";
import postData from "./postData";
// 创建一个mock adapter实例
const mock = new MockAdapter(axiosInstance);

// 模拟用户登录
mock.onPost("/api/account/login").reply((config) => {
  console.log("Login request received");
  const credentials = JSON.parse(config.data);
  console.log("Login credentials:", credentials);

  // 模拟返回的响应数据
  const response = {
    userId: 2,
    username: "Admin",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkB5YWhvby5jb20iLCJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMjUzOTA5MywiZXhwIjoxNzEyNTgyMjkzfQ.8f5wDZBAXOZYFWs4dsmcNMvjDgdYUFZeUDbDt3g6bBo",
    message: "Login successful",
  };

  console.log("Token saved to localStorage:", response.token);

  return [200, response];
});

// export const getAllPosts = (page, limit) =>
//   apiRequest("get", "/api/posts", null, { page, limit });

// 模拟取得貼文列表
mock
  .onGet("/api/posts", { params: { page: 1, limit: 9 } })
  .reply(200, postData);
