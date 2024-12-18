import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../../Assets/instagram.svg";
import Facebook from "../../Assets/facebook.svg";
import Youtube from "../../Assets/youtube.svg";
import Tiktok from "../../Assets/tiktok.svg";
import Copyright from "../../Assets/copyright-regular.svg";
import Button from "../Subsections/Button";
import Kementan from '../../Assets/Partners/Kementan.png';
import Kemendag from '../../Assets/Partners/Kemendag.png';
import Bkp from '../../Assets/Partners/Bkp.png';
import Iso from '../../Assets/Partners/Iso.png';
import Fairtrade from '../../Assets/Partners/Fairtrade.png';
import Rainforest from '../../Assets/Partners/Rainforest.png';

function Footer() {
  return (
    <>
      {/* Top Banner */}
      <div className="relative h-fit text-gray-50 px-24 py-8">
        <div className="absolute inset-0 bg-spice1 bg-cover"></div>
        <div className="absolute inset-0 bg bg-yellow-950 opacity-75"></div>
        <div className="relative z-10 flex flex-wrap justify-between items-center">
          <p className="text-gray-50 font-prociono">
            Langganan untuk mendapatkan informasi dan promo menarik dari Spicita
          </p>
          <Button label={"Mulai Belajar"} link={"/dashboard"} />
        </div>
      </div>
      {/* Bottom Banner */}
      <div className="relative h-fit text-gray-50 mt-12 px-24 py-12">
        <div className="absolute inset-0 bg-spice1 bg-cover bg-bottom"></div>
        <div className="absolute inset-0 bg-yellow-950 opacity-75"></div>
        <div className="relative z-10 flex flex-col">
          <div className="flex flex-wrap justify-between items-top">
            <div>
              <p className="font-lexendDeca text-gray-50 text-xl font-bold mb-4">
                Spicita
              </p>
              <p className="font-prociono">
                Spicita memberikan kemudahan akses edukasi ekspor dan hilirisasi
                hasil panen bagi petani rempah nusantara.
              </p>
            </div>
            <div className="max-w-44">
              <p className="font-lexendDeca text-gray-50 text-xl font-bold mb-4">
                Tautan
              </p>
              <p className="font-prociono mb-2 text-gray-50 hover:text-secondary">
                <Link to={"/"}>Konfirmasi Pembayaran</Link>
              </p>
              <p className="font-prociono mb-2 text-gray-50 hover:text-secondary">
                <Link to={"/"}>Syarat & Ketentuan</Link>
              </p>
              <p className="font-prociono mb-2 text-gray-50 hover:text-secondary">
                <Link to={"/"}>Kebijakan Privasi</Link>
              </p>
            </div>
            <div className="max-w-44">
              <p className="font-lexendDeca text-gray-50 text-xl font-bold mb-4">
                Partners
              </p>
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <div className="flex justify-center items-center">
                  <img src={Kementan} alt="Kementan" />
                </div>
                <div className="flex justify-center items-center">
                  <img src={Kemendag} alt="Kemendag" className="h-max w-32" />
                </div>
                <div className="flex justify-center items-center">
                  <img src={Bkp} alt="Badan Karantina Pertanian" className="h-max w-8" />
                </div>
                <div className="flex justify-center items-center">
                  <img src={Iso} alt="ISO" className="h-max w-32" />
                </div>
                <div className="flex justify-center items-center">
                  <img src={Fairtrade} alt="Fairtrade" className="h-max w-8" />
                </div>
                <div className="flex justify-center items-center">
                  <img src={Rainforest} alt="Rainforest" className="h-max w-8" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="h-8 w-auto filter-white" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="h-8 w-auto filter-white" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} alt="YouTube" className="h-8 w-auto filter-white" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src={Tiktok} alt="TikTok" className="h-8 w-auto filter-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mx-24 py-2 gap-1">
        <img src={Copyright} alt="copyright" className="h-4 w-auto fill-transparent" />
        <p className="font-lexendDeca text-p text-yellow-950">
          2024. Spicita. All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
