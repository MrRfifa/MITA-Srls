import React from "react";
import { useTranslation } from "react-i18next";
import icon1 from "../../assets/img/icon/icon-04-primary.png";
import icon2 from "../../assets/img/icon/icon-03-primary.png";
import image from "../../assets/img/resume.jpg";

const Resume = () => {
  const { t } = useTranslation("home");
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={image}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0  rounded pe-3 pb-3"
                style={{ width: "200px", height: "200px" }}
              >
                <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                  <h1 className="text-white mb-0">25</h1>
                  <h2 className="text-white">{t("years")}</h2>
                  <h5 className="text-white mb-0">{t("exp")}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-5 fs-1 fw-bold text-info">
                {t("resumetitle")}
              </h1>
              <p className="fs-5 text-primary mb-4">
                {t("resumedescription1")}
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 me-3" src={icon1} alt="" />
                    <h5 className="mb-0 feat-item">{t("flexplans")}</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img className="flex-shrink-0 me-3" src={icon2} alt="" />
                    <h5 className="mb-0 feat-item">{t("moneyguarantee")}</h5>
                  </div>
                </div>
              </div>
              <p className="mb-4">{t("resumedescription2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
