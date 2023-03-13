import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Articles from "./pages/articles/Articles";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Article from "./pages/articles/Article";
import AddArticle from "./pages/articles/AddArticle";
import NotFound from "./pages/NotFound";
import ArticlesNavbar from "./components/navbar/ArticlesNavbar";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark && "bg-dark"}>
      <Navbar isDark={isDark} handleThemeChange={handleThemeChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/articles">
          <Route index element={<Articles isDark={isDark} />} />
          <Route path=":id" element={<Article />} />
          <Route path="addarticle" element={<AddArticle />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Navbar />
      <Container>
        <Home />
        <br />
        <br />
        <Articles />

        <br />
        <br />

        <Login />

        <br />
        <br />
      </Container> */}
    </div>
  );
}

export default App;
