import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { image } from '../data/imgData';
import { asyncSetAuthUser } from '../../../states/authUser/action';
import useInput from '../../../hooks/useInput';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Dapatkan dispatcher Redux

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: 'easeInOut' } },
  };

  const [username, setUsername] = useInput('');
  const [password, setPassword] = useInput('');

  const handleLogin = () => {
    if (!username || !password) {
      toast.error('Email dan password harus diisi.');
      return;
    }
    onLogin({ email: username, password });
  };

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
      .then(() => {
        // Navigasi berdasarkan jenis pengguna
        if (email === 'admin@gmail.com') {
          navigate('/admin');
        } else {
          navigate('/home');
        }
        // Tampilkan pesan toast jika login berhasil
        toast.success('Login berhasil!');
      })
      .catch((error) => {
        console.error("Error while logging in:", error);
        // Tambahkan notifikasi jika login gagal
        toast.error('Login gagal. Silakan periksa kredensial Anda.');
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin(e);
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
    <motion.div className="flex flex-col lg:flex-row w-full max-w-screen-xl mb-4 border border-brown-500 mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl" variants={containerVariants} initial="hidden" animate="visible">
    <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image.login})` }}></div>

    <motion.div className="w-full lg:w-1/2 px-6 py-8 md:px-8" variants={formVariants} initial="hidden" animate="visible">
      
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src={image.logo} alt="" />
        </div>

        <p className="mt-3 text-xl font-extrabold text-center text-gray-600">Masuk</p>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="LoggingEmailAddress">
            Email
          </label>
          <input
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="loggingPassword">
              Password
            </label>
          </div>

          <input
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="block mb-2 text-xs font-medium text-gray-500">Gunakan minimal 8 karakter dengan kombinasi huruf dan angka</label>
          <a href="#" className="text-xs text-gray-500 hover:underline">
            Lupa Password?
          </a>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            onKeyPress={handleKeyPress}
          >
            Masuk
          </button>
        </div>

        <div className="text-center mt-5">
          <span className="text-sm text-gray-600"></span>
          <p className="text-sm text-gray-600"> Belum punya akun? </p>
          <Link to="/daftar" className="text-sm text-brown-500 hover:underline hover:text-blue-500">
            {' '}
            Daftar
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </form>
  );
};

export default LoginPage;
