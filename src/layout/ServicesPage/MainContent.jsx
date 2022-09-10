import React from "react";
import Navbar from "../Navbar";
import "../../assets/css/style.css";
import "../../assets/lib/animate/animate.min.css";
import "../../assets/lib/owlcarousel/assets/owl.carousel.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/js/main";
import PageHeader from "./PageHeader";
import ServicesList from "./ServicesList";
import Footer from "../Footer";

const MainContent = () => {
  return (
    <div>
      <Navbar />
      <PageHeader />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default MainContent;
