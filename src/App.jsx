import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "./components/LandingPage/Loading";

// landing page
import LandingPage from "./pages/LandingPage/Landing-page";
import Abouts from "./pages/LandingPage/Abouts";
import Login from "./pages/LandingPage/Login";
import SignUp from "./pages/LandingPage/SignUp";
// dashboard
import AdminPage from "./pages/Dashboard/Admin-page";

// home
import MainPage from "./pages/Home/Main-page";

import { asyncPreloadProcess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";

function App() {
  const { authUser = null, isPreload = false } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<SignUp />} />
        {authUser && <Route path="/admin" element={<AdminPage />} />}
        {authUser && <Route path="/main" element={<MainPage />} />}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
