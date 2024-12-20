import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Artikel from './pages/Artikel.jsx'
import Beranda from './pages/Beranda.jsx'
import Dasbor from './pages/Dasbor.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Tentang from './pages/Tentang.jsx'
import ClassPage from './pages/ClassPage.jsx'
import Certificate from './pages/Certificate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/App' element={<App />} />
        <Route path='/article' element={<Artikel />} />
        <Route path='/' element={<Beranda />} />
        <Route path='/dashboard' element={<Dasbor />} />
        <Route path='/about' element={<Tentang />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/learning' element={<ClassPage />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </Router>
  </StrictMode>
);
