import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { counter } = useSelector((state) => state);

  const handleLogin = () => {
    localStorage.setItem("token", "irj94ig9duingid");
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Click the Button to Login</p>
      <button onClick={handleLogin}>login</button>
      <p>{counter}</p>
    </div>
  );
};

export default Login;
