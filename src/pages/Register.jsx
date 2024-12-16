import React from 'react';
import Logo from '../assets/Spicita Logo.svg'


const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen"
    style={{ backgroundImage: `url('${Logo}')` }}>
    <div className="absolute inset-0 bg-primary opacity-30"></div>
      <div className="relative w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">Mulai dengan mendaftar</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Masukkan username"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Masukkan email"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Kata Sandi</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Buat kata sandi"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Konfirmasi Sandi</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              placeholder="Konfirmasi kata sandi"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-accent rounded-md shadow-sm hover:bg-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Daftar
          </button>
        </form>
        <div className="text-sm text-center text-gray-500">
          Sudah punya akun? <a href="/login" className="font-medium text-secondary hover:text-primary">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;