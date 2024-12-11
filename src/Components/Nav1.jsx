import React from "react";
import { Link } from "react-router-dom";
import SiteLogo from "./logo";

const Nav1 = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center h-24 py-4 justify-between px-24 bg-gray-50 shadow-md">
      <SiteLogo />
      <div className="flex flex-row items-center gap-12">
        <ul className="flex justify-end gap-6">
          <li className="font-prociono text-yellow-950 hover:text-secondary">
            <Link to="/home">Beranda</Link>
          </li>
          <li className="font-prociono text-yellow-950 hover:text-secondary">
            <Link to="/dashboard">Dasbor Belajar</Link>
          </li>
          <li className="font-prociono text-yellow-950 hover:text-secondary">
            <Link to="/about">Tentang</Link>
          </li>
          <li className="font-prociono text-yellow-950 hover:text-secondary">
            <Link to="/article">Berita & Artikel</Link>
          </li>
        </ul>
        <button className="font-lexendDeca font-bold text-yellow-950 ring-2 ring-yellow-500 hover:ring-4 rounded-md px-2 py-1">
          Masuk
        </button>
      </div>
    </div>
  );
};

export default Nav1;