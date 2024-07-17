import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const isAuthenticated = () => {
    return !!localStorage.getItem("token"); // 假設 token 存儲在 localStorage 中
  };

  // 保護路由組件
  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
