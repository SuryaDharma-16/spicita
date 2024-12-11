import React from "react";
import Footer from "../components/footer";
import Nav1 from "../Components/Nav1";
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
