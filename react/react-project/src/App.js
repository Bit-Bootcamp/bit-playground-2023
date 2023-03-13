import { Routes, Route } from "react-router-dom";

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
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/articles" element={<ArticlesNavbar />}>
          <Route index element={<Articles />} />
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
    </>
  );
}

export default App;
