import axiosInstance from "../axiosInsyance";
import MockAdapter from "axios-mock-adapter";

// 创建一个mock adapter实例
const mock = new MockAdapter(axiosInstance);

// 模拟用户登录
mock.onPost("/api/account/login").reply(() => {
  // 模拟返回的响应数据
  // const response = {
  //   userId: 2,
  //   username: "Admin",
  //   token:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkB5YWhvby5jb20iLCJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMjUzOTA5MywiZXhwIjoxNzEyNTgyMjkzfQ.8f5wDZBAXOZYFWs4dsmcNMvjDgdYUFZeUDbDt3g6bBo",
  //   message: "Login successful",
  // };

  const response = {
    userId: 1,
    username: "user",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkB5YWhvby5jb20iLCJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMjUzOTA5MywiZXhwIjoxNzEyNTgyMjkzfQ.8f5wDZBAXOZYFWs4dsmcNMvjDgdYUFZeUDbDt3g6bBo",
    message: "Login successful",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, response]);
    }, 1000);
  });
});

// 模拟用户註冊
mock.onPost("/api/account/register").reply(() => {
  // 模拟返回的响应数据
  // const response = {
  //   message: "Account registered successfully",
  //   token:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIyIiwiZW1haWwiOiJ1c2VyMkB5YWhvby5jb20iLCJ1c2VySWQiOjQsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2MDk5MTc2LCJleHAiOjE3MTYxODU1NzZ9.A9OqQUr2Cx1aJ9BuoS2gCD7BK-Y1AWyGEEva_-PdHDQ",
  //   account: {
  //     userId: 2,
  //     username: "Admin",
  //     email: "admin@yahoo.com",
  //   },
  // };

  const response = {
    message: "Account registered successfully",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIyIiwiZW1haWwiOiJ1c2VyMkB5YWhvby5jb20iLCJ1c2VySWQiOjQsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2MDk5MTc2LCJleHAiOjE3MTYxODU1NzZ9.A9OqQUr2Cx1aJ9BuoS2gCD7BK-Y1AWyGEEva_-PdHDQ",
    account: {
      userId: 1,
      username: "user",
      email: "user@yahoo.com",
    },
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, response]);
    }, 1000);
  });
});

// 模拟取得貼文列表
mock.onGet("/api/posts").reply((config) => {
  const { page, limit } = config.params; // 提取查询参数

  const response = {
    data: [
      {
        id: 21,
        userId: 2,
        title: "asf",
        body: "asfasf",
        date: "2024-07-19 8:31:15 AM",
        tags: ["american", "crime", "fiction"],
      },
      {
        id: 21,
        userId: 1,
        title: "Philosophy of Science",
        body: "How philosophy shapes our understanding of science.",
        date: "2024-06-20 12:40:50 PM",
        tags: ["philosophy", "science"],
      },
      {
        id: 20,
        userId: 1,
        title: "Criminal Minds",
        body: "Understanding the psychology behind criminal behavior.",
        date: "2024-06-20 11:25:14 AM",
        tags: ["crime", "psychology"],
      },
      {
        id: 19,
        userId: 1,
        title: "Fantasy Worlds",
        body: "The magic and mystery of fantasy worlds.",
        date: "2024-06-20 10:10:29 AM",
        tags: ["fantasy"],
      },
      {
        id: 18,
        userId: 1,
        title: "Science Innovations",
        body: "Recent innovations and discoveries in science.",
        date: "2024-06-19 9:55:47 PM",
        tags: ["science"],
      },
      {
        id: 17,
        userId: 1,
        title: "American Icons",
        body: "Exploring the cultural impact of American icons.",
        date: "2024-06-19 8:20:31 PM",
        tags: ["american", "history"],
      },
    ],
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    totalPages: 4,
    totalPosts: 21,
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, response]);
    }, 1000);
  });
});

//模擬取得我的貼文列表
mock.onPost("/api/posts/mypost").reply((config) => {
  const { page, limit } = JSON.parse(config.data); // 提取请求参数
  const response = {
    page: page, // 确保这是你请求的页数
    limit: limit,
    totalPages: 2,
    totalPosts: 11,
    data: [
      {
        id: 21,
        userId: 2,
        title: "asf",
        body: "asfasf",
        date: "2024-07-19 8:31:15 AM",
        tags: ["american", "crime", "fiction"],
      },
      {
        id: 14,
        userId: 2,
        title: "Space Odyssey",
        body: "The future of space travel and colonization.",
        date: "2024-06-19 3:30:29 PM",
        tags: ["space", "science"],
      },
      {
        id: 10,
        userId: 2,
        title: "The Adventure Begins",
        body: "A thrilling tale of exploration and discovery.",
        date: "2024-06-18 9:45:33 PM",
        tags: ["adventure", "fiction"],
      },
      {
        id: 9,
        userId: 2,
        title: "Philosophical Musings",
        body: "Exploring fundamental questions about existence and knowledge.",
        date: "2024-06-18 8:30:21 PM",
        tags: ["philosophy"],
      },
      {
        id: 8,
        userId: 2,
        title: "Crime and Punishment",
        body: "Analyzing famous crime cases and their societal impact.",
        date: "2024-06-18 7:20:45 PM",
        tags: ["crime", "history"],
      },
      {
        id: 7,
        userId: 2,
        title: "Fantasy Realms",
        body: "Exploring the worlds created in fantasy literature.",
        date: "2024-06-18 5:35:17 PM",
        tags: ["fantasy", "fiction"],
      },
      {
        id: 15,
        userId: 2,
        title: "Philosophical Musings",
        body: "Exploring fundamental questions about existence and knowledge.",
        date: "2024-06-18 8:30:21 PM",
        tags: ["philosophy"],
      },
      {
        id: 16,
        userId: 2,
        title: "Crime and Punishment",
        body: "Analyzing famous crime cases and their societal impact.",
        date: "2024-06-18 7:20:45 PM",
        tags: ["crime", "history"],
      },
      {
        id: 17,
        userId: 2,
        title: "Fantasy Realms",
        body: "Exploring the worlds created in fantasy literature.",
        date: "2024-06-18 5:35:17 PM",
        tags: ["fantasy", "fiction"],
      },
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, response]);
    }, 1000);
  });
});

// 模拟取得用户列表
mock.onGet("/api/accounts").reply(() => {
  const response = {
    accounts: [
      {
        userId: 1,
        username: "John",
        email: "john@yahoo.com",
        password: "john123",
        role: "user",
      },
      {
        userId: 2,
        username: "Admin",
        email: "admin@yahoo.com",
        password: "admin123",
        role: "admin",
      },
      {
        userId: 3,
        username: "jerry222",
        email: "admin4@yahoo.com",
        password: "admin123",
        role: "admin",
      },
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, response]);
    }, 1000);
  });
});

// 模拟取得當前貼文
mock.onGet(new RegExp("/api/posts/view/.*")).reply(() => {
  const response = {
    id: 21,
    userId: 2,
    title: "asf",
    body: "asfasf",
    date: "2024-07-19 8:31:15 AM",
    tags: ["american", "crime", "fiction"],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, response]);
    }, 1000);
  });
});
