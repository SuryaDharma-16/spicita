import React from "react";
import Image from "../Assets/article.jpg";
import Nav1 from "../Components/Sections/Nav1";
import Footer from "../Components/Sections/Footer";
import Carousel from "../Components/Sections/Carousel";
import Breadcrumbs from "../Components/Subsections/Breadcrumbs";
import Content from "../Components/Sections/Content";

const Artikel = () => {
  return (
    <>
      <Nav1 />
      <section className="px-64 py-8 gap-8">
        <Breadcrumbs title1={"Beranda"} title2={"Berita & Artikel"} />
        <Content
          title={`Indonesia Tingkatkan Ekspor Rempah Melalui Kolaborasi dengan Petani Lokal`}
          image={Image}
          source={"Sumber : Kompas, 2023"}
        />
      </section>
      <div className="flex flex-col justify-center h-screen">
        <div className="px-64">
          <h1 className="font-lexendDeca text-h2 text-primary font-bold text-center">Bacaan lainnya</h1>
        </div>
        <Carousel />
      </div>
      <Footer />
    </>
  );
};

export default Artikel;
