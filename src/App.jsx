import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// landing page
import LandingPage from "./pages/LandingPage/Landing-page";
import Abouts from "./pages/LandingPage/Abouts";
import Login from "./pages/LandingPage/Login";
import SignUp from "./pages/LandingPage/SignUp";
// dashboard
import AdminPage from "./pages/Dashboard/Admin-page";

// home
import MainPage from "./pages/Home/Main-page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<SignUp />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
