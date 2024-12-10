import React from "react";
import Logo from "../Assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex align-middle my-4 justify-between mx-24">
        <img src={Logo} alt="Spicita" className="h-8 w-auto" />
        <div className="flex flex-row items-center gap-12">
          <ul className="flex justify-end gap-6">
            <li className="font-prociono">Beranda</li>
            <li className="font-prociono">Dasbor Belajar</li>
            <li className="font-prociono">Tentang</li>
            <li className="font-prociono">Berita & Artikel</li>
          </ul>
          <button className="font-prociono ring-2 hover:ring-4 rounded-md px-2 py-1">Masuk</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
