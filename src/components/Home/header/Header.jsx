import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiLogOut } from 'react-icons/fi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
    const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile dropdown

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const closeProfileDropdown = () => {
        setIsProfileOpen(false);
    };

    // Dummy user data
    const user = {
        name: 'candra',
        email: 'candra@example.com',
    };

    return (
        <>
            <nav className="relative bg-white shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to="/" className="flex items-center space-x-3">
                            <img className="w-auto h-8 sm:h-7" src="/logo/android-chrome-512x512.png" alt="logo Rukun Perkasa" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-brown-800">Rukun Perkasa</span>
                        </Link>
                        <div className="flex lg:hidden">
                            <button onClick={() => { toggleMenu(); closeProfileDropdown(); }} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {!isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 ${isMenuOpen ? 'block' : 'hidden'} md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link to="/" onClick={closeMenu} className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Home</Link>
                            <Link to="/shop" onClick={closeMenu} className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Shop</Link>
                            <Link to="/about" onClick={closeMenu} className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">About</Link>
                        </div>

                        <div className="flex items-center mt-4 md:mt-0 ml-auto md:ml-0"> {/* Added ml-auto for margin */}
                            <Link to='/cart' className="my-2 mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                                <FiShoppingCart className="w-6 h-6" />
                            </Link>

                            <div className="relative">
                                <button onClick={toggleProfileDropdown} type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                    <FiUser className="w-6 h-6" />
                                    <span className="mx-2 text-gray-700 dark:text-gray-200">{user.name}</span>
                                </button>
                                {isProfileOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                        <div className="block px-4 py-2 text-sm text-gray-700">{user.email}</div>
                                        <Link to="/transactions" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Riwayat Transaksi</Link>
                                        <Link to="/settings" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Setelan</Link>
                                        <Link to="/track" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Track Resi</Link>
                                        <button onClick={() => console.log('logout')} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                                            <FiLogOut className="w-4 h-4 inline-block -mt-1 mr-1" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
