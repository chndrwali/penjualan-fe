import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/Landing-page"
import Abouts from "./pages/LandingPage/Abouts"

function App() {

  return (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<Abouts />} />
  </Routes>
  )
}

export default App
