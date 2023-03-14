import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Articles from "./pages/articles/Articles";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Article from "./pages/articles/Article";
import AddArticle from "./pages/articles/AddArticle";
import NotFound from "./pages/NotFound";
import ArticlesNavbar from "./components/navbar/ArticlesNavbar";

import { useSelector } from "react-redux";

export const ThemeContext = createContext(null);

function App() {
  // const [isDark, setIsDark] = useState(false);
  const isDark = useSelector((state) => state.theme.isDark);

  // const dispatch = useDispatch();

  // const handleThemeChange = () => {
  //   setIsDark(!isDark);
  // };

  return (
    <>
      <div className={isDark && "bg-dark"}>
        <Navbar />
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
    </>
  );
}

export default App;
