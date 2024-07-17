import axiosInstance from "../axiosInsyance";

// Utility function to handle API requests
const apiRequest = async (method, url, data = null, params = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error(`Error ${method} ${url}:`, error);
    throw error;
  }
};

// Account APIs

// Register a new user
export const registerUser = (userData) =>
  apiRequest("post", "/api/account/register", userData);

// Login user (user and admin)
export const loginUser = (credentials) =>
  apiRequest("post", "/api/account/login", credentials);

// Get all accounts (admin only)
export const getAllAccounts = () => apiRequest("get", "/api/accounts");

// Post APIs

// Get all posts (admin only)
export const getAllPosts = (page, limit) =>
  apiRequest("get", "/api/posts", null, { page, limit });

// Get all logged user posts (user and admin)
export const getMyPosts = (page, limit) =>
  apiRequest("post", "/api/posts/mypost", { page, limit });

// Create a new post (user and admin)
export const createPost = (postData) =>
  apiRequest("post", "/api/posts/create", postData);

// Edit selected post (user and admin)
export const editPost = (postId, postData) =>
  apiRequest("put", `/api/posts/edit/${postId}`, postData);

// Delete selected post (user and admin)
export const deletePost = (postId) =>
  apiRequest("delete", `/api/posts/delete/${postId}`);

// View selected post (user and admin)
export const viewPost = (postId) =>
  apiRequest("get", `/api/posts/view/${postId}`);
