/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.form
        className="bg-gradient-to-r from-brown to-coffee p-8 rounded-lg shadow-lg"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Login to Your Account</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-brown-100 text-brown-800"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-brown-100 text-brown-800"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="w-full bg-earth-500 text-white py-2 rounded hover:bg-earth-600 transition duration-300 ease-in-out"
          type="submit"
        >
          Login
        </button>
      </motion.form>
    </motion.div>
  );
};

export default LoginPage;
