import React from "react";
import { Link } from "react-router-dom";
import SiteLogo from "./logo";

const Nav1 = () => {
  return (
    <>
      <div className="flex align-middle my-4 justify-between mx-24">
        <SiteLogo />
        <div className="flex flex-row items-center gap-12">
          <ul className="flex justify-end gap-6">
            <li className="font-prociono"><Link to={'/home'}>Beranda</Link></li>
            <li className="font-prociono"><Link to={'/dashboard'}>Dasbor Belajar</Link></li>
            <li className="font-prociono"><Link to={'/about'}>Tentang</Link></li>
            <li className="font-prociono"><Link to={'/article'}>Berita & Artikel</Link></li>
          </ul>
          <button className="font-prociono ring-2 ring-yellow-500 hover:ring-4 rounded-md px-2 py-1">Masuk</button>
        </div>
      </div>
    </>
  );
};

export default Nav1;
