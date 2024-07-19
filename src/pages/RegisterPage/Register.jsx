import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/account/account";
import InputField from "../../components/utils/InputField";
import SelectField from "../../components/utils/SelectField";
import NotificationModal from "../../components/utils/NotificationModal";
import validateForm from "../../utils/validateForm";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [filedError, setFiledError] = useState({});
  const [notification, setNotification] = useState({
    show: false,
    success: false,
    message: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm([
      { name: "username", value: username, rules: { required: true } },
      { name: "email", value: email, rules: { required: true } },
      {
        name: "password",
        value: password,
        rules: { required: true, minLength: 6, pattern: /^[a-zA-Z0-9]+$/ },
      },
      { name: "role", value: role, rules: { required: true } },
    ]);

    if (Object.keys(validationErrors).length > 0) {
      setFiledError(validationErrors);
    } else {
      setFiledError({});
      try {
        const response = await registerUser({
          username,
          email,
          password,
          role,
        });
        console.log("Register successful", response);

        const token = response.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", response.userId);
        localStorage.setItem("username", response.username);
        localStorage.setItem("role", response.userId === 1 ? "admin" : "user");
        setNotification({
          show: true,
          success: true,
          message: response.message,
        });

        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2000);
      } catch (error) {
        console.log("Register failed", error);
        setNotification({
          show: true,
          success: false,
          message: error?.response?.data?.error || "Registration failed",
        });
      }
    }
  };

  const closeNotification = () => {
    setNotification({ ...notification, show: false });
  };

  useEffect(() => {
    setFiledError({});
  }, [email, password, username, role]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6e6e6] w-full">
      <div className="flex flex-col items-center justify-start bg-white rounded-2xl shadow-lg w-full max-w-md p-6 md:p-10">
        <h2 className="tracking-wider text-2xl md:text-3xl font-normal text-center p-4 w-full">
          Register User
        </h2>
        <form
          className="flex flex-col items-center justify-start w-full font-normal text-base flex-1"
          onSubmit={handleSubmit}
        >
          <InputField
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            error={filedError.username}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={filedError.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={filedError.password}
          />
          <SelectField
            id="role"
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            error={filedError.role}
            options={[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
            ]}
          />
          <div className="flex items-center justify-between mt-12 w-4/5">
            <button
              type="submit"
              className="rounded-2xl w-full bg-[#F8B959] hover:bg-yellow-400 text-lg py-2 md:py-1 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
          <div className="flex items-center justify-between mt-10 w-4/5">
            <button
              type="button"
              className="w-full text-center text-[#F8B959] text-xl md:text-3xl tracking-wide font-light"
              onClick={() => navigate("/login")}
            >
              Back to Login Page
            </button>
          </div>
        </form>
      </div>
      <NotificationModal
        show={notification.show}
        success={notification.success}
        message={notification.message}
        onClose={closeNotification}
      />
    </div>
  );
};

export default Register;
