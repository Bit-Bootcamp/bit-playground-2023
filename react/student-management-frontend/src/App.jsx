import { useState } from "react";
import Navbar from "./features/common/navbar/Navbar";
import { Route, Routes } from "react-router";
import Login from "./features/login/Login";
import Register from "./features/register/Register";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
