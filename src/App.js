import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Routes, Route, Navigate, redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import Archive from "./pages/Archive";
import Rubric from "./pages/Rubric";
import Header from "./components/Header";
import CurrentPost from "./components/Posts/CurrentPost/CurrentPost";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Profile from "./pages/Profile";
import ThemePage from "./pages/ThemePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(checkAuth());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/post/:id" element={<CurrentPost />} />
        <Route path="/t/:theme" element={<ThemePage />} exact />
        <Route path="/t/:theme/:rubric" element={<Rubric />} />
        <Route path="/archive" element={<Archive />} exact />
        <Route path="/archive/:rubric" element={<Rubric />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
