import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Dashboard/header/Header';
import { asyncPreloadProcess } from './states/isPreload/action';
import { logout } from './states/authUser/action';

// landing page
import LandingPage from './pages/LandingPage/Landing-page';
import Abouts from './pages/LandingPage/Abouts';
import Login from './pages/LandingPage/Login';
import SignUp from './pages/LandingPage/SignUp';
// dashboard
import AdminPage from './pages/Dashboard/Admin-page';
import CategoriesPage from './pages/Dashboard/Categories-page';
import ProductPage from './pages/Dashboard/Product-page';
import OrdersPage from './pages/Dashboard/Order-page';

// home
//import MainPage from "./pages/Home/Main-page";

function App  () {
  const {
    userData = null,
    isPreload = false,
  } = useSelector((states) => states.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    // @TODO: dispatch async action to sign out
    dispatch(logout());
  };

  if (isPreload) {
    return null;
  }

  if (userData === null) {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

return (
  <>
  <Routes>
      <Header userData={userData} signOut={onSignOut}/>
      <Route path="/admin" element={<AdminPage  />} />
      <Route path="/admin/categories" element={<CategoriesPage />} />
      <Route path="/admin/products" element={<ProductPage />} />
      <Route path="/admin/orders" element={<OrdersPage />} />
  </Routes>
  <ToastContainer />
  </>
)
}

export default App;
