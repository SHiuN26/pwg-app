import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Register</div>
      <button onClick={() => navigate("/login")}>back to login page</button>
    </>
  );
};

export default Register;
