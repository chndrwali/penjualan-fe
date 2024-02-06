/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Logika signup di sini
    console.log(`Sign up with Full Name: ${fullName}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-brown to-coffee">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="flex items-center justify-center mb-6">
          {/* Logo */}
          <img
            src="/logo/android-chrome-512x512.png"
            alt="Logo"
            className="h-12 w-12 mr-2"
          />
          <h2 className="text-2xl font-bold text-brown-800">Sign Up</h2>
        </div>
        <div className="mb-4">
          <label className="block text-brown-600 text-sm font-semibold mb-2" htmlFor="fullName">
            Full Name:
          </label>
          <input
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-brown-500"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-brown-600 text-sm font-semibold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-brown-500"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-brown-600 text-sm font-semibold mb-2" htmlFor="password">
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
        <button
          onClick={handleSignup}
          className="w-full bg-brown-500 text-white py-2 rounded hover:bg-brown-600 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
        {/* Google Sign Up */}
        <button
          onClick={() => console.log('Sign up with Google')}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded flex items-center justify-center hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <FaGoogle className="mr-2" />
          Sign Up with Google
        </button>
        <p className="mt-4 text-sm text-brown-600">
          Already have an account? <a href="#" className="text-brown-800">Log in here</a>.
        </p>

        
      </motion.div>
    </div>
  );
};

export default SignupPage;
