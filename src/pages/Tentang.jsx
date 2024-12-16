import React from "react";
import Nav1 from "../Components/Sections/Nav1";
import Footer from "../Components/Sections/Footer";
import Info from "../Components/Sections/Info";
import Team from "../Components/Sections/Team";
import Goals from "../Components/Sections/Goals";

const Tentang = () => {
  return (
    <>
      <Nav1 />
      <section className="py-12">
        <Info
        title={'Tentang Kami'}
        description={'Spicita menyediakan solusi akses edukasi ekspor dan hilirisasi hasil panen bagi petani rempah-rempah Nusantara.  Spicita.id menyediakan pembelajaran yang dikategorikan berdasarkan jenis rempah yang menjadi fokus utama masing-masing pengguna kami. Berkomitmen meningkatkan daya saing petani rempah-rempah Indonesia di pasar global, mendukung keberlanjutan lingkungan dan kesejahteraan petani.'}/>

        <Goals />

        <Team />

      </section>
      <Footer />
    </>
  );
};

export default Tentang;
