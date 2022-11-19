import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  const hanleSubmit = async (e) => {
    e.preventDefault();
    const response = axios
      .post(`http://localhost:1337/auth/local`, {
        identifier: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        console.log(res);
        setUser({
          token: res.data.jwt,
          username: res.data.user.username,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    console.log("response", response);
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
