import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../components/Auth/SignIn";
import { signOut } from "../redux/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);

  const isAuth = useSelector((state) => state.userSlice.token);
  const username = useSelector((state) => state.userSlice.username);
  const favoritesPosts = useSelector((state) => state.userSlice.favoritesPosts);
  console.log("favoritesPosts", favoritesPosts);
  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };

  if (!isAuth.length)
    return (
      <div>
        Вы не авторизованы.
        <br />
        <Link to="/signin">Авторизоваться</Link> <br />
        <Link to="/signup">Зарегестрироваться</Link>
      </div>
    );

  return (
    <div>
      Name: {username}
      <button onClick={() => handleSignOut()}>
        <Link to="/">SignOut</Link>
      </button>
      <br />
      {favoritesPosts.map((i) => (
        <div key={i.id}>
          {i.text}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Profile;
