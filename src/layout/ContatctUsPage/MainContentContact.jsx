import React from "react";
import Navbar from "../Navbar";
import "../../assets/css/style.css";
import "../../assets/lib/animate/animate.min.css";
import "../../assets/lib/owlcarousel/assets/owl.carousel.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/js/main";
import ContactHeader from "./ContactHeader";
import Contact from "./Contact";
import Footer from "../Footer";

const MainContentContact = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainContentContact;
