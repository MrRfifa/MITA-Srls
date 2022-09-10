import React from "react";
import { useTranslation } from "react-i18next";
import v1 from "../../assets/videos/v1.mp4";
import v2 from "../../assets/videos/v2.mp4";
import v3 from "../../assets/videos/v3.mp4";
import v4 from "../../assets/videos/v4.mp4";
import v5 from "../../assets/videos/v5.mp4";
import v6 from "../../assets/videos/v6.mp4";
import v7 from "../../assets/videos/v7.mp4";

const Videos = () => {
  const { t } = useTranslation(["video"]);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5">{t("vidtitle")}</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="col-lg-4 col-md-6 wow fadeInUp "
            data-wow-delay="0.5s"
          >
            <div className="d-flex align-items-center ">
              <video className="img-fluid" src={v1} controls muted />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-center ">
              <video className="img-fluid" src={v3} controls muted />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-center ">
              <video className="img-fluid" src={v4} controls muted />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-center m-5 ">
              <video className="img-fluid" src={v5} controls muted />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-center m-5">
              <video className="img-fluid" src={v6} controls muted />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-center ">
              <video className="img-fluid" src={v7} controls muted />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-center ">
              <video className="img-fluid" src={v2} controls muted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
