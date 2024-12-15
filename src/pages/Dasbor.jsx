import React from "react";
import Nav1 from "../Components/Sections/Nav1";
import Footer from "../Components/Sections/Footer";
import DashboardBanner from "../Components/Sections/DashboardBanner";
import CardShowcase from "../Components/Sections/CardShowcase";

const Dasbor = () => {
  return (
    <>
      <Nav1 />
      <DashboardBanner/>
      <CardShowcase />
      <Footer />
    </>
  );
};

export default Dasbor;
