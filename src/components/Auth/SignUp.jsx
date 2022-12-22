import React, { useState } from "react";
import _ from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRegistration } from "../../redux/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const hanleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    if (e.target.username.value.length < 6) {
      setErrors("Короткий юзернейм");
    }
    dispatch(fetchRegistration({ e, navigate }));
  };
  console.log(errors);
  return (
    <>
      <form onSubmit={hanleSubmit}>
        <input name="username" placeholder="Username" />
        <input name="email" placeholder="Email address" />
        <input name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
      {errors}
      <Link to="/signin">Уже есть аккаунт?</Link>
    </>
  );
};

export default SignUp;
