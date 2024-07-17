// Account APIs

import apiRequest from "../apiRequest";

// Register a new user
export const registerUser = (userData) =>
  apiRequest("post", "/api/account/register", userData);

// Login user (user and admin)
export const loginUser = (credentials) =>
  apiRequest("post", "/api/account/login", credentials);

// Get all accounts (admin only)
export const getAllAccounts = () => apiRequest("get", "/api/accounts");
