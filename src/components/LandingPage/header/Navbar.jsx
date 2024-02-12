/* eslint-disable react/prop-types */
import { NavLink, useLocation } from 'react-router-dom';

function Navbar({ isHamburgerOpen }) {
  const location = useLocation();

  const isSignInOrSignUpPage = () => {
    return location.pathname === '/masuk' || location.pathname === '/daftar';
  };

  return (
    <nav
      id="nav-menu"
      className={`${!isHamburgerOpen && 'hidden'} absolute py-3 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
    >
      <div className="block lg:flex">
        <NavLink
          to="/"
          className="nav-link"
          activeclassname="nav-link active"
          title="Tombol menu beranda"
          aria-label="Tombol menu beranda"
        >
          Beranda
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link mb-3 lg:mb-0"
          activeclassname="nav-link active" 
          title="Tombol menu tentang kami"
          aria-label="Tombol menu tentang kami"
        >
          Tentang Kami
        </NavLink>
       
        {!isSignInOrSignUpPage() && ( 
          <>
            <NavLink
              to="/masuk"
              className="btn-link2"
              title="Tombol menu masuk"
              aria-label="Tombol menu masuk"
            >
              Masuk
            </NavLink>
            <NavLink
              to="/daftar"
              className="btn-link"
              title="Tombol menu daftar"
              aria-label="Tombol menu daftar"
            >
              Daftar
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
