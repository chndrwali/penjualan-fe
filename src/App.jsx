import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/Landing-page"
import Abouts from "./pages/LandingPage/Abouts"
import Login from "./pages/LandingPage/Login"
import SignUp from "./pages/LandingPage/SignUp"

function App() {

  return (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<Abouts />} />
    <Route path="/masuk" element={<Login />} />
    <Route path="/daftar" element={<SignUp />}/> 
  </Routes>
  )
}

export default App
