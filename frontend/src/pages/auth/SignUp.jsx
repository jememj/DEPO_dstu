import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../helpers";

const SignUp = () => {
  const navigate = useNavigate();

  const hanleSubmit = async (e) => {
    e.preventDefault();
    const response = axios
      .post(`http://localhost:1337/auth/local/register`, {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    console.log("response", response);

    const data = response.json();
    if (data?.error) {
      throw data?.error;
    } else {
      console.log("data", data);
      setToken(data.jwt);
      navigate("/profile", { replace: true });
    }
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
