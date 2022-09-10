import React from "react";
import Navbar from "../Navbar";
import "../../assets/css/style.css";
import "../../assets/lib/animate/animate.min.css";
import "../../assets/lib/owlcarousel/assets/owl.carousel.css";
import "../../assets/css/bootstrap.min.css";
import CarouselSlide from "./CarouselSlide";
import Footer from "../Footer";
import Resume from "./Resume";
import Facts from "./Facts";
import Features from "./Features";
import VideoLibrary from "./VideoLibrary";
import "../../assets/js/main";

const MainPageLayout = () => {
  return (
    <div>
      <Navbar />
      <CarouselSlide />
      <Resume />
      <Facts />
      <Features />
      <VideoLibrary />
      <Footer />
    </div>
  );
};

export default MainPageLayout;
