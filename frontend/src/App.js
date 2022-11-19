import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CoachPage from "./pages/CoachPage";
import MainPage from "./pages/MainPage";
import ArtPage from "./pages/ArtPage";
import MediaPage from "./pages/MediaPage";
import ProfessionPage from "./pages/ProfessionPage";
import AboutUs from "./pages/AboutUs";
import Archive from "./pages/archive/Archive";
import Rubric from "./pages/archive/Rubric";
import Header from "./components/Header";
import CurrentArticle from "./components/Articles/SpecificArticle/SpecificArticle";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
