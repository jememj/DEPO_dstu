import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Routes, Route, Navigate, redirect } from "react-router-dom";
import CoachPage from "./pages/CoachPage";
import MainPage from "./pages/MainPage";
import ArtPage from "./pages/ArtPage";
import MediaPage from "./pages/MediaPage";
import ProfessionPage from "./pages/ProfessionPage";
import AboutUs from "./pages/AboutUs";
import Archive from "./pages/Archive";
import Rubric from "./pages/Rubric";
import Header from "./components/Header";
import CurrentArticle from "./components/Posts/CurrentPost/CurrentPost";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Profile from "./pages/Profile";

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
        <Route path="/main" element={<MainPage />} />
        <Route path="/article/:id" element={<CurrentArticle />} />
        <Route path="/coach" element={<CoachPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/proffesion" element={<ProfessionPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/archive" element={<Archive />} exact />
        <Route path="/archive/:rubric" element={<Rubric />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:theme/:rubric" element={<Rubric />} />
      </Routes>
    </div>
  );
}

export default App;
