import React from "react";
import Logo from "../Assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex align-middle my-4 justify-between mx-8">
        <img src={Logo} alt="Spicita" className="h-12 w-auto" />
        <ul className="flex justify-end">
          <li className="mx-4">Beranda</li>
          <li className="mx-4">Dasbor Belajar</li>
          <li className="mx-4">Tentang</li>
          <li className="mx-4">Berita & Artikel</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
