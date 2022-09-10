import React from "react";
import { useTranslation } from "react-i18next";
import icon1 from "../../assets/img/icon/icon-06-primary.png";
import icon2 from "../../assets/img/icon/icon-03-primary.png";
import icon3 from "../../assets/img/icon/icon-04-primary.png";
import icon4 from "../../assets/img/icon/icon-07-primary.png";
import image from "../../assets/img/img.jpg";

const Features = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-6 mb-5 fs-1 fw-bold text-info">
              {t("featuretitle")}
            </h1>
            <p className="mb-4">{t("featuredescription")}</p>
            <div className="row g-3">
              <div
                className="col-sm-6 wow fadeIn service-item"
                data-wow-delay="0.1s"
              >
                <div className=" rounded h-100 p-3">
                  <div className=" d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                    <img
                      className="align-self-center mb-3"
                      src={icon1}
                      alt=""
                    />
                    <h5 className="mb-0 feat-item"> {t("process")}</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 wow fadeIn service-item"
                data-wow-delay="0.2s"
              >
                <div className="rounded h-100 p-3">
                  <div className="d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                    <img
                      className="align-self-center mb-3"
                      src={icon2}
                      alt=""
                    />
                    <h5 className="mb-0 feat-item"> {t("delivery")}</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 wow fadeIn service-item"
                data-wow-delay="0.3s"
              >
                <div className=" rounded h-100 p-3">
                  <div className=" d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                    <img
                      className="align-self-center mb-3"
                      src={icon3}
                      alt=""
                    />
                    <h5 className="mb-0 feat-item"> {t("policy")}</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 wow fadeIn service-item"
                data-wow-delay="0.4s"
              >
                <div className=" rounded h-100 p-3">
                  <div className=" d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                    <img
                      className="align-self-center mb-3"
                      src={icon4}
                      alt=""
                    />
                    <h5 className="mb-0 feat-item"> {t("moneysaving")}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="position-relative rounded overflow-hidden h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={image}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
