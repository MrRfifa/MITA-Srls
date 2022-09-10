import React from "react";
import slider_img1 from "../../assets/img/Slider_img1.jpg";
import slider_img2 from "../../assets/img/Slider_img2.jpg";
import slider_img3 from "../../assets/img/Slider_img3.jpg";
import slider_img4 from "../../assets/img/Slider_img4.jpg";
import slider_img5 from "../../assets/img/Slider_img5.jpg";
import slider_img6 from "../../assets/img/Slider_img6.jpg";

const CarouselSlide = () => {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={slider_img1} alt="" />
          </div>
          <div className="carousel-item">
            <img className="w-100" src={slider_img2} alt="" />
          </div>
          <div className="carousel-item">
            <img className="w-100" src={slider_img3} alt="" />
          </div>
          <div className="carousel-item">
            <img className="w-100" src={slider_img4} alt="" />
          </div>
          <div className="carousel-item">
            <img className="w-100" src={slider_img5} alt="" />
          </div>
          <div className="carousel-item">
            <img className="w-100" src={slider_img6} alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlide;
