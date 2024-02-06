/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'

const LoginPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: 'easeInOut' } },
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleLogin = () => {
    // Perform login logic here based on username, password, and role
    if (username && password) {
      // Check credentials and role, then redirect or perform necessary actions
      if (role === 'admin') {
        // Redirect or perform admin-specific actions
      } else {
        // Redirect or perform user-specific actions
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-brown to-coffee"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-8">
          <img
            src="/logo/android-chrome-512x512.png"
            alt="Logo"
            className="mx-auto h-12"
          />
          <h2 className="text-2xl font-bold mt-4">Login to Your Account</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-brown-500"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-brown-500"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="role">
            Role:
          </label>
          <select
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-brown-500"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          className="w-full bg-brown-500 text-white py-2 rounded hover:bg-brown-600 transition duration-300 ease-in-out mb-4"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-center text-gray-600 text-sm">
          Or
        </p>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center"
          type="button"
        >
          <FaGoogle className="mr-2" />
          Login with Google
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don{`'`}t have an account? <Link to="/signup" className="text-brown-800">Sign up here</Link>.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
