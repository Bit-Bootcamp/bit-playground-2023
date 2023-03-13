import React from "react";
import { Outlet } from "react-router-dom";

const ArticlesNavbar = () => {
  return (
    <div>
      <h1>ArticlesNavbar</h1>
      <Outlet />
    </div>
  );
};

export default ArticlesNavbar;
