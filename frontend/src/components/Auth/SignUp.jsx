import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRegistration } from "../../redux/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchRegistration({ e, navigate }));
  };

  return (
    <>
      <form onSubmit={hanleSubmit}>
        <input name="username" placeholder="Username" />
        <input name="email" placeholder="Email address" />
        <input name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/signin">Уже есть аккаунт?</Link>
    </>
  );
};

export default SignUp;
