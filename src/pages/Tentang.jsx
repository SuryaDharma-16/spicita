import React from "react";
import Nav1 from "../Components/Sections/Nav1";
import Footer from "../Components/Sections/Footer";
import Info from "../Components/Sections/Info";
import Team from "../Components/Sections/Team";
import Goals from "../Components/Sections/Goals";
import Partner from "../Components/Sections/Partner";

const Tentang = () => {
  return (
    <>
      <Nav1 />
      <section className="flex flex-col justify-between pt-12">
        <div className="flex flex-col h-[calc(100vh-64px)] gap-4">
          <Info
          title={'Tentang Kami'}
          description={'Spicita menyediakan solusi akses edukasi ekspor dan hilirisasi hasil panen bagi petani rempah-rempah Nusantara.  Spicita.id menyediakan pembelajaran yang dikategorikan berdasarkan jenis rempah yang menjadi fokus utama masing-masing pengguna kami. Berkomitmen meningkatkan daya saing petani rempah-rempah Indonesia di pasar global, mendukung keberlanjutan lingkungan dan kesejahteraan petani.'}
          textAlign={'text-center'}
          />
          <Goals />
        </div>
        <Team />
        <Partner />
      </section>
      <Footer />
    </>
  );
};

export default Tentang;
