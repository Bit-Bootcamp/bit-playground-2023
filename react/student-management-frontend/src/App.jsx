import { useEffect, useState } from "react";
import Navbar from "./features/common/navbar/Navbar";
import { Route, Routes } from "react-router";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import { useGetCurrentUserQuery } from "./api/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./api/globalSlices/user.slics";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const { data } = useGetCurrentUserQuery();

  useEffect(() => {
    if (data) {
      dispatch(addUser(data.data.user));
    }
  }, [data]);

  return (
    <>
      {(!user || user.role !== "student") && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
