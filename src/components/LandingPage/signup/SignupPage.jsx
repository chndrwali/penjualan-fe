import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { signupReq } from '../../../utils/api';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');
  const [error, setError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate passwords match
      if (password !== cPassword) {
        setError('Passwords do not match');
        return;
      }

      // Check if email is admin@gmail.com
      if (email === 'admin@gmail.com') {
        setError('Signup with email admin@gmail.com is not allowed');
        return;
      }

      // Call signupReq API
      await signupReq({ name: username, email, password, cPassword });

      // If successful, clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setcPassword('');
      setError('');
    } catch (error) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
          </div>
          
          <div className="relative flex items-center mt-8">
            <span className="absolute left-3 top-1">
              <FaUser className="w-6 h-6 text-gray-300 dark:text-gray-500" />
            </span>
            <input 
              type="text" 
              className="block w-full py-3 pl-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute left-3 top-1">
              <FaUser className="w-6 h-6 text-gray-300 dark:text-gray-500" />
            </span>
            <input 
              type="email" 
              className="block w-full py-3 pl-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute left-3 top-1">
              <FaLock className="w-6 h-6 text-gray-300 dark:text-gray-500" />
            </span>
            <input 
              type="password" 
              className="block w-full py-3 pl-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute left-3 top-1">
              <FaLock className="w-6 h-6 text-gray-300 dark:text-gray-500" />
            </span>
            <input 
              type="password" 
              className="block w-full py-3 pl-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
              placeholder="Confirm Password"
              value={cPassword}
              onChange={(e) => setcPassword(e.target.value)} 
            />
          </div>

          <div className="mt-6">
            <motion.button 
              type="submit" 
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign Up
            </motion.button>

            <div className="mt-6 text-center ">
              <Link to="/masuk" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Already have an account?
              </Link>
            </div>
          </div>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default SignupPage;
