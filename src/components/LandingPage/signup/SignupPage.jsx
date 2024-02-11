import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { signupReq } from '../../../utils/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');
  const [error, setError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: 'easeInOut' } },
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

      // Show success toast and navigate to login page
      toast.success('Sign up successful! Please login.');
      navigate('/masuk');
    } catch (error) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')"}}>
        <div className="h-full bg-black bg-opacity-50"></div>
      </div>
      <div className="w-full lg:w-1/2 px-6 py-8 md:px-8">
        <motion.form 
        className="md:w-96 mx-auto" 
        onSubmit={handleSubmit}
        variants={formVariants}
        initial="hidden"
        animate="visible">
          <div className="flex justify-center">
            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Sign Up
          </p>
          
          {/* Form inputs */}
          
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600" >Username</label>
            <input 
              type="text" 
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg" 
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600" >Email</label>
            <input 
              type="email" 
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600" >Password</label>
            <input 
              type="password" 
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600" >Confirm Password</label>
            <input 
              type="password" 
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg" 
              placeholder="Confirm Password"
              value={cPassword}
              onChange={(e) => setcPassword(e.target.value)} 
            />
          </div>

          <div className="mt-6">
            <motion.button 
              type="submit" 
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
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
        </motion.form>
      </div>
    </motion.div>
  );
};

export default SignupPage;
