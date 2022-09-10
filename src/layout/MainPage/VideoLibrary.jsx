import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import v7 from "../../assets/videos/v7.mp4";
import v2 from "../../assets/videos/v2.mp4";

const VideoLibrary = () => {
  const { t } = useTranslation("home");
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5 fs-1 fw-bold text-info">
            {t("videotitle")}
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="col-lg-4 col-md-6 wow fadeInUp "
            data-wow-delay="0.5s"
          >
            <div className="d-flex align-items-center ">
              <video className="img-fluid" src={v2} controls muted />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-center ">
              <video className="img-fluid" src={v7} controls muted />
            </div>
          </div>

          <div
            className=" col-lg-4 col-md-6 wow fadeInUp"
            aria-hidden="true"
            data-wow-delay="0.5s"
          >
            <Link to="/videos" tabIndex="-1" className="btn btn-primary col-6">
              {t("videobutton")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;
