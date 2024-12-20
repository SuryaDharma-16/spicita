import React from 'react';
import Logo from '../Assets/logo.svg'
import Background from '../Assets/spices-image-1.jpg'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" 
    style={{
      backgroundImage: `url('${Background}')`,
    }}>
      <div className="absolute inset-0 bg-primary opacity-30"></div>
      <div className="relative w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
         <Link to={'/'}><img src={Logo} alt="Logo" className="h-10" /></Link>
        </div>
        <h2 className="text-xl font-bold text-center text-gray-900">Masuk dan mulai petualanganmu!</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='Masukkan Email'
              autoComplete="email"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Kata Sandi</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder='Masukkan Sandi'
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">Ingat saya</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-secondary">Lupa kata sandi?</a>
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-accent rounded-md shadow-sm hover:bg-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Masuk
          </button>
        </form>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-sm text-dark">Atau lanjutkan dengan</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <img src="https://img.icons8.com/?size=100&id=106567&format=png&color=000000" alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>
        <div className="text-sm text-center text-dark">
          Belum punya akun? <a href="/register" className="font-medium text-secondary hover:text-primary">Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;