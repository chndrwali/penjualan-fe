import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
          </div>
          
          <div className="flex items-center justify-center mt-6">
            <Link to="/signin" className="w-1/2 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
              sign in
            </Link>
            <Link to="/signup" className="w-1/2 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
              sign up
            </Link>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute left-3 top-1">
              <FaUser className="w-6 h-6 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="text" className="block w-full py-3 pl-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute left-3 top-1">
              <FaLock className="w-6 h-6 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="password" className="block w-full py-3 pl-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute left-3 top-1">
              <FaLock className="w-6 h-6 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="password" className="block w-full py-3 pl-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
          </div>

          <div className="mt-6">
            <motion.button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </motion.button>

            <div className="mt-6 text-center ">
              <Link to="/signin" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default SignUpPage;
