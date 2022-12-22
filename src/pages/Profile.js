import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/userSlice";
import ListPosts from "../components/Posts/ListPosts";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);

  const isAuth = useSelector((state) => state.userSlice.token);
  const username = useSelector((state) => state.userSlice.username);
  const favoritesPosts = useSelector((state) => state.userSlice.favoritesPosts);
  const email = useSelector((state) => state.userSlice.email);

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
      Name: {username} <br />
      Email: {email} <br />
      <button onClick={() => handleSignOut()}>
        <Link to="/">SignOut</Link>
      </button>
      <br />
      <ListPosts list={favoritesPosts} />
    </div>
  );
};

export default Profile;
