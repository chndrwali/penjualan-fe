import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { loginReq } from '../../../utils/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const navigate = useNavigate();
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

  const handleLoginAdmin = async () => {
    try {
      const response = await loginReq({ email: username, password });
      if (response.token) {
        toast.success('Login successful');
        navigate('/dashboard');
      } else {
        toast.error('Failed to login. Please check your credentials.');
      }
    } catch (error) {
      toast.error('Failed to login. Please try again.');
    }
  };

  const handleLoginUser = async () => {
    try {
      const response = await loginReq({ email: username, password });
      if (response.token) {
        toast.success('Login successful');
        navigate('/main');
      } else {
        toast.error('Failed to login. Please check your credentials.');
      }
    } catch (error) {
      toast.error('Failed to login. Please try again.');
    }
  };

  const handleLogin = () => {
    if (username && password) {
      if (username === 'admin@gmail.com') {
        handleLoginAdmin();
      } else {
        handleLoginUser();
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')"}}></div>
      
      <motion.div
        className="w-full lg:w-1/2 px-6 py-8 md:px-8"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
          <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
          </div>

          <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="mt-6">
          <button onClick={handleLogin} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link to="/daftar" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
