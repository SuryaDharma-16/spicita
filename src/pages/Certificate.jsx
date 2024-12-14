import React from "react";
import Nav1 from "../Components/Nav1";
import Footer from "../components/footer";
import Facebook from "../Assets/facebook-black.svg";
import Instagram from "../Assets/instagram-black.svg";
import Testi from "../Components/Sections/Testi";
import Paper from "../Assets/certificate-paper.jpg";
import Linkedin from "../Assets/linkedin.svg";
import Stepper from "../Components/Subsections/Stepper";
import Button from "../Components/Subsections/Button";
import Breadcrumbs2 from "../Components/Subsections/Breadcrumbs2";

const Certificate = () => {
  return (
    <>
      <Nav1 />
      <div className="px-24 mt-8 mb-4">
        <Breadcrumbs2
        title1={'Pengolahan Cengkeh Berkualitas Ekspor'}
        title2={'Klaim Sertifikat'}
        />
      </div>
      <div className="flex flex-row justify-between h-[calc(100vh-64px)] px-24 gap-24">
        <div className="w-[calc((50vw-6rem))]">
          <p className="font-lexendDeca text-h5 text-yellow-950 font-bold mb-4">
            Sertifikat Pengolahan Cengkeh Standar Ekspor
          </p>
          <img src={Paper} alt="certificate" className="rounded-md" />
        </div>
        <div className="w-[calc((50vw-6rem))]">
          <p className="font-lexendDeca text-h5 text-yellow-950 font-bold mb-4">
            Dapatkan & Bagikan Sertifikat
          </p>
          <div className="flex flex-row gap-4 mb-4">
            <img src={Facebook} alt="facebook" className="h-8 w-auto" />
            <img src={Instagram} alt="facebook" className="h-8 w-auto" />
            <img src={Linkedin} alt="facebook" className="h-8 w-auto" />
          </div>
          <p className="font-prociono text-p text-yellow-950 mb-4">
            Siap untuk sertifikasi keterampilan ekspor dan hilirisasi produk
            rempah-rempah cengkeh yang terstandarisasi? Sertifikasi ini akan
            memvalidasi keterampilan berharga Anda dan dapat membuat Anda
            menonjol di pasar global.
          </p>
          <div className="flex flex-row mb-4">
            <p className="font-lexendDeca text-h5 text-primary">Rp.</p>
            <p className="font-lexendDeca text-h5 text-primary">139.000,00</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Stepper />
            <Button
              link={
                "https://drive.google.com/file/d/1OVnxnZAszjYdRSLQXQX05bwFcm6CJu_d/view?usp=drive_link"
              }
              label={"Dapatkan Sertifikat"}
            />
          </div>
        </div>
      </div>
      <Testi />
      <Footer />
    </>
  );
};

export default Certificate;
