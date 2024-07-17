import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e6e6e6] w-full">
      <div className="flex flex-col items-center justify-start bg-white rounded-2xl shadow-lg h-[70vh] w-[70vh] p-10">
        <h2 className="tracking-wider text-3xl font-nromal text-center  p-4 w-full">
          Login Page
        </h2>
        <form className="flex flex-col items-center justify-start w-full font-nromal text-base flex-1">
          <div className="mt-10 w-4/5">
            <label
              className="tracking-wider block mb-1 pl-2 text-lg"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-full border border-2 border-[#F8B959] rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline"
            />
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
              className="rounded-full border border-2 border-[#F8B959] rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between mt-12 w-4/5">
            <button
              type="button"
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
    </div>
  );
};

export default Login;
