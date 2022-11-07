import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoachPage from "./pages/CoachPage";
import MainPage from "./pages/MainPage";
import ArtPage from "./pages/ArtPage";
import MediaPage from "./pages/MediaPage";
import ProfessionPage from "./pages/ProfessionPage";
import AboutUs from "./pages/AboutUs";
import Archive from "./pages/Archive";
import Header from "./components/Header";
import CurrentArticle from "./components/Articles/SpecificArticle/SpecificArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/main" element={<MainPage />} exact />
        <Route path="/coach" element={<CoachPage />} exact />
        <Route path="/art" element={<ArtPage />} exact />
        <Route path="/media" element={<MediaPage />} exact />
        <Route path="/proffesion" element={<ProfessionPage />} exact />
        <Route path="/about" element={<AboutUs />} exact />
        <Route path="/archive" element={<Archive />} exact />
        <Route path="/article/:id" element={<CurrentArticle />} exact />
      </Routes>
    </div>
  );
}

export default App;
