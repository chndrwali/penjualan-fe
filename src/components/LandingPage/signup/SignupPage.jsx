import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { image } from '../data/imgData';
import { useAuth } from '../../../context/AuthContext'; // Impor useAuth dari konteks autentikasi

const SignupPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth(); // Gunakan useAuth untuk mengakses fungsi register dari konteks autentikasi

  const [name, setName] = useState('');
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
    if (name && email && password && cPassword) {
      try {
        await register({ name, email, password, cPassword }); // Gunakan fungsi register dari konteks autentikasi
        toast.success('Registrasi berhasil! Silakan masuk.');
        navigate('/masuk');
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('Semua kolom harus diisi.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto overflow-hidden border border-brown-500 bg-white rounded-lg shadow-lg mb-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image.signup})` }}>
        <div className="h-full "></div>
      </div>
      <div className="w-full lg:w-1/2 px-6 py-8 md:px-8">
        <motion.form
          className="md:w-96 mx-auto"
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-center">
            <img className="w-auto h-7 sm:h-8" src={image.logo} alt="" />
          </div>

          <p className="mt-3 text-xl font-extrabold text-center text-gray-600 ">Daftar akun Rukun Perkasa</p>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Nama Lengkap</label>
            <input
              type="text"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
              placeholder="Alamat Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block mb-2 text-xs font-medium text-gray-500">Gunakan alamat email aktif Anda</label>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="block mb-2 text-xs font-medium text-gray-500">Gunakan minimal 8 karakter dengan kombinasi huruf dan angka</label>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Ulangi Password</label>
            <input
              type="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
              placeholder="Ulangi Password"
              value={cPassword}
              onChange={(e) => setcPassword(e.target.value)}
            />
            <label className="block mb-2 text-xs font-medium text-gray-500">Gunakan minimal 8 karakter dengan kombinasi huruf dan angka</label>
          </div>

          <div className="mt-6">
            <motion.button
              type="submit"
              className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
              onKeyPress={handleKeyPress}
            >
              Daftar
            </motion.button>

            <div className="mt-6 text-center ">
              <p className='text-sm text-gray-600'> Sudah punya akun? </p>
              <Link to="/masuk" className="text-sm text-brown-500 underline hover:underline hover:text-blue-500 ">
                Masuk sekarang
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
