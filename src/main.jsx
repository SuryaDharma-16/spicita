import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Artikel from './pages/Artikel.jsx';
import Beranda from './pages/Beranda.jsx';
import Dasbor from './pages/Dasbor.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/app' element={<App />} />
        <Route path='/article' element={<Artikel />} />
        <Route path='/home' element={<Beranda />} />
        <Route path='/dashboard' element={<Dasbor />} />
        <Route path='/register' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  </StrictMode>
);
