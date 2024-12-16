import React from "react";
import Nav1 from "../Components/Sections/Nav1";
import Footer from "../Components/Sections/Footer";
import Hero from "../Components/Sections/Hero";
import Testi from "../Components/Sections/Testi";
import Trivia from "../Components/Sections/Trivia";
import Banner from "../Components/Sections/Banner";

const Beranda = () => {
  return (
    <>
      <Nav1 />
      <Hero />
      <Trivia />
      <Banner />
      <Testi />
      <Footer />
    </>
  );
};

export default Beranda;
