import React from "react";
import { useTranslation } from "react-i18next";
import icon1 from "../../assets/img/icon/icon-10-light.png";
import icon2 from "../../assets/img/icon/icon-01-light.png";
import icon3 from "../../assets/img/icon/icon-05-light.png";
import icon4 from "../../assets/img/icon/icon-08-light.png";
import icon5 from "../../assets/img/icon/icon-07-light.png";
import icon6 from "../../assets/img/icon/icon-06-light.png";

const ServicesList = () => {
  const { t } = useTranslation(["service"]);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="display-6 mb-5 fs-1 fw-bold ">{t("servicetitle")} </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded h-100 p-5">
              <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                  <img className="img-fluid" src={icon1} alt="" />
                </div>
                <h4 className="mb-0 fs-1 fw-bold ">{t("service1title")}</h4>
              </div>
              <p className="mb-4">{t("service1description")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded h-100 p-5">
              <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                  <img className="img-fluid" src={icon2} alt="" />
                </div>
                <h4 className="mb-0 fs-1 fw-bold ">{t("service2title")}</h4>
              </div>
              <p className="mb-4">{t("service2description")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded h-100 p-5">
              <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                  <img className="img-fluid" src={icon3} alt="" />
                </div>
                <h4 className="mb-0 fs-1 fw-bold ">{t("service3title")}</h4>
              </div>
              <p className="mb-4">{t("service3description")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded h-100 p-5">
              <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                  <img className="img-fluid" src={icon4} alt="" />
                </div>
                <h4 className="mb-0 fs-1 fw-bold ">{t("service4title")}</h4>
              </div>
              <p className="mb-4">{t("service4description")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded h-100 p-5">
              <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                  <img className="img-fluid" src={icon5} alt="" />
                </div>
                <h4 className="mb-0 fs-1 fw-bold ">{t("service5title")}</h4>
              </div>
              <p className="mb-4">{t("service5description")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded h-100 p-5">
              <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                  <img className="img-fluid" src={icon6} alt="" />
                </div>
                <h4 className="mb-0 fs-1 fw-bold ">{t("service6title")}</h4>
              </div>
              <p className="mb-4">{t("service6description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
