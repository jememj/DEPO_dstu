import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { fetchLogin } from "../../redux/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ e, navigate }));
  };

  return (
    <>
      <form onSubmit={hanleSubmit}>
        <input name="email" placeholder="Email address" />
        <input name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Зарегестрироваться</Link>
    </>
  );
};

export default SignIn;
