import { useEffect, useState } from "react";
import Navbar from "./features/common/navbar/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Login from "./features/login/Login";
import Register from "./features/register/Register";
import { useGetCurrentUserQuery } from "./api/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./api/globalSlices/user.slics";
import Profile from "./features/profile/Profile";
import Home from "./features/home/Home";
import Protected from "./features/protected/Protected";
import NotAuthorized from "./features/protected/NotAuthorized";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { data, isError, isSuccess, isLoading } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addUser(data.data.user));
    }
  }, [data]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/403" element={<NotAuthorized />} />

        <Route path="/profile" element={<Profile />} />

        <Route element={<Protected user={user} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
