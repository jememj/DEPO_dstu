import "./App.css";
import { Routes, Route } from "react-router-dom";
import CoachPage from "./pages/CoachPage";
import MainPage from "./pages/MainPage";
import ArtPage from "./pages/ArtPage";
import MediaPage from "./pages/MediaPage";
import ProfessionPage from "./pages/ProfessionPage";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    article: Model,
  },
  seeds(server) {
    server.create("article", {
      id: "1",
      title: "coach",
      theme: "coach",
      rubric: "deporec",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget velit a velit dignissim ultricies. Praesent vulputate gravida rutrum. Nunc neque ante, facilisis vel urna non, ullamcorper pharetra augue. Nunc ante ipsum, tempor ut odio sed, porta sollicitudin velit. Phasellus porttitor magna gravida molestie blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas pellentesque lacus nec maximus. Mauris tincidunt feugiat quam, faucibus consequat lectus fringilla vel. Fusce aliquam lacinia facilisis. Donec vestibulum viverra tortor, ullamcorper fringilla turpis pharetra quis. Sed mattis elit viverra consectetur vestibulum. Quisque dapibus diam magna, eu finibus nulla tincidunt ut. Maecenas at scelerisque diam, non porta quam. Duis id ligula eros. Curabitur lobortis mattis sapien eu semper.",
    });
    server.create("article", {
      id: "2",
      title: "coach",
      theme: "coach",
      rubric: "deporec",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget velit a velit dignissim ultricies. Praesent vulputate gravida rutrum. Nunc neque ante, facilisis vel urna non, ullamcorper pharetra augue. Nunc ante ipsum, tempor ut odio sed, porta sollicitudin velit. Phasellus porttitor magna gravida molestie blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas pellentesque lacus nec maximus. Mauris tincidunt feugiat quam, faucibus consequat lectus fringilla vel. Fusce aliquam lacinia facilisis. Donec vestibulum viverra tortor, ullamcorper fringilla turpis pharetra quis. Sed mattis elit viverra consectetur vestibulum. Quisque dapibus diam magna, eu finibus nulla tincidunt ut. Maecenas at scelerisque diam, non porta quam. Duis id ligula eros. Curabitur lobortis mattis sapien eu semper.",
    });
    server.create("article", {
      id: "3",
      title: "art",
      theme: "art",
      rubric: "deporec",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget velit a velit dignissim ultricies. Praesent vulputate gravida rutrum. Nunc neque ante, facilisis vel urna non, ullamcorper pharetra augue. Nunc ante ipsum, tempor ut odio sed, porta sollicitudin velit. Phasellus porttitor magna gravida molestie blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas pellentesque lacus nec maximus. Mauris tincidunt feugiat quam, faucibus consequat lectus fringilla vel. Fusce aliquam lacinia facilisis. Donec vestibulum viverra tortor, ullamcorper fringilla turpis pharetra quis. Sed mattis elit viverra consectetur vestibulum. Quisque dapibus diam magna, eu finibus nulla tincidunt ut. Maecenas at scelerisque diam, non porta quam. Duis id ligula eros. Curabitur lobortis mattis sapien eu semper.",
    });
    server.create("article", {
      id: "4",
      title: "art",
      theme: "art",
      rubric: "deporec",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget velit a velit dignissim ultricies. Praesent vulputate gravida rutrum. Nunc neque ante, facilisis vel urna non, ullamcorper pharetra augue. Nunc ante ipsum, tempor ut odio sed, porta sollicitudin velit. Phasellus porttitor magna gravida molestie blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas pellentesque lacus nec maximus. Mauris tincidunt feugiat quam, faucibus consequat lectus fringilla vel. Fusce aliquam lacinia facilisis. Donec vestibulum viverra tortor, ullamcorper fringilla turpis pharetra quis. Sed mattis elit viverra consectetur vestibulum. Quisque dapibus diam magna, eu finibus nulla tincidunt ut. Maecenas at scelerisque diam, non porta quam. Duis id ligula eros. Curabitur lobortis mattis sapien eu semper.",
    });
    server.create("article", {
      id: "5",
      title: "media",
      theme: "media",
      rubric: "deporec",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget velit a velit dignissim ultricies. Praesent vulputate gravida rutrum. Nunc neque ante, facilisis vel urna non, ullamcorper pharetra augue. Nunc ante ipsum, tempor ut odio sed, porta sollicitudin velit. Phasellus porttitor magna gravida molestie blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas pellentesque lacus nec maximus. Mauris tincidunt feugiat quam, faucibus consequat lectus fringilla vel. Fusce aliquam lacinia facilisis. Donec vestibulum viverra tortor, ullamcorper fringilla turpis pharetra quis. Sed mattis elit viverra consectetur vestibulum. Quisque dapibus diam magna, eu finibus nulla tincidunt ut. Maecenas at scelerisque diam, non porta quam. Duis id ligula eros. Curabitur lobortis mattis sapien eu semper.",
    });
  },
  routes() {
    this.get("/api/articles", (schema, request) => {
      console.log("schema", schema);
      return schema.articles.all();
    });
    this.get("/api/articles/:theme", (schema, request) => {
      let theme = request.params.theme;
      return schema.articles.where({ theme: theme });
    });
  },
});

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
      </Routes>
    </div>
  );
}

export default App;
