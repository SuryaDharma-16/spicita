import React from "react";
import SiteLogo from "../Subsections/Logo.jsx";

const Nav2 = () => {
  return (
    <>
      <div className="flex items-center h-24 py-4 justify-between px-24 bg-gray-50 shadow-md">
        <SiteLogo />
        <div className="flex flex-row items-center gap-12">
          <ul className="flex justify-end gap-6">
            <li className="font-prociono">
              <Link to={"/home"}>Beranda</Link>
            </li>
            <li className="font-prociono">
              <Link to={"/about"}>Tentang</Link>
            </li>
            <li className="font-prociono">
              <Link to={"/article"}>Berita & Artikel</Link>
            </li>
          </ul>
          <button className="font-lexendDeca font-bold text-yellow-950 ring-2 ring-yellow-500 hover:ring-4 rounded-md px-2 py-1">
            Masuk
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav2;
