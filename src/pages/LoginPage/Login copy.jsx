import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/apiRequest";
import { setAuthToken } from "../../axiosInsyance"; // 修正導入路徑

const validateForm = (email, password) => {
  const validationErrors = {};

  if (!email) {
    validationErrors.email = "Email is required";
  }

  if (!password) {
    validationErrors.password = "Password is required";
  } else if (password.length < 6) {
    validationErrors.password = "Password must be at least 6 characters";
  } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
    validationErrors.password = "Password can only contain letters and numbers";
  }

  return validationErrors;
};

const Login = () => {
  const [email, setEmail] = useState("admin@yahoo.com");
  const [password, setPassword] = useState("admin123");
  const [filedError, setFiledError] = useState({});
  const [notification, setNotification] = useState({
    show: false,
    success: false,
    message: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(email, password);

    if (Object.keys(validationErrors).length > 0) {
      setFiledError(validationErrors);
    } else {
      setFiledError({});
      try {
        const response = await loginUser({ email, password });
        //明碼傳輸密碼，不安全！！！！！！！！！！！！
        console.log("Login successful", response);
        const token = response.token;
        console.log("token", token);
        setAuthToken(token);
        // 將 token 保存到 localStorage
        localStorage.setItem("token", token);
        // 顯示成功通知
        setNotification({
          show: true,
          success: true,
          message: "Successfully login",
        });

        // 延遲導航，讓用戶看到成功通知
        // setTimeout(() => {
        //   navigate("/dashboard", { replace: true });
        // }, 5000);
      } catch (error) {
        console.log("Login failed", error);
        // 顯示失敗通知
        setNotification({
          show: true,
          success: false,
          message: "Invalid credentials",
        });
      }
    }
  };

  const closeNotification = () => {
    setNotification({ ...notification, show: false });
  };

  useEffect(() => {
    setFiledError({});
  }, [email, password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6e6e6] w-full">
      <div className="flex flex-col items-center justify-start bg-white rounded-2xl shadow-lg h-[70vh] w-[70vh] p-10">
        <h2 className="tracking-wider text-3xl font-normal text-center p-4 w-full">
          Login Page
        </h2>
        <form
          className="flex flex-col items-center justify-start w-full font-normal text-base flex-1"
          onSubmit={handleSubmit}
        >
          <div className="mt-10 w-4/5">
            <label
              className="tracking-wider block mb-1 pl-2 text-lg"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border border-2 border-[#F8B959] w-full py-1 px-3 focus:outline-none focus:shadow-outline"
            />
            {filedError.email && (
              <p className="text-red-500 text-sm mt-1">{filedError.email}</p>
            )}
          </div>
          <div className="mt-6 w-4/5">
            <label
              className="tracking-wider block mb-1 pl-2 text-lg"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-full border border-2 border-[#F8B959] w-full py-1 px-3 focus:outline-none focus:shadow-outline"
            />
            {filedError.password && (
              <p className="text-red-500 text-sm mt-1">{filedError.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between mt-12 w-4/5">
            <button
              type="submit"
              className="rounded-2xl w-full bg-[#F8B959] hover:bg-yellow-400 text-lg py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-between mt-10 w-4/5">
            <button
              type="button"
              className="w-full text-center text-[#F8B959] text-3xl tracking-wide font-light"
              onClick={() => navigate("/register")}
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
      {notification.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`flex items-center ${
              notification.success ? "justify-center" : "justify-around"
            } flex-col bg-white rounded-2xl p-6 shadow-lg text-center w-[55vh] h-[30vh]`}
          >
            <div className="">
              {notification.success ? (
                <div className="text-green-500">
                  {/* suss */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="text-red-500">
                  {/* error */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="text-xl">{notification.message}</div>
            {!notification.success && (
              <div>
                <button
                  className="bg-[#F8B959] hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full w-[20vh]"
                  onClick={closeNotification}
                >
                  Ok
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
