import React from "react";
import { useTranslation } from "react-i18next";

const Facts = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="container-fluid overflow-hidden my-5 px-lg-0">
      <div className="container facts px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 px-4 ps-lg-0">
              <h1 className="text-white mb-4">{t("factstitle")}</h1>
              <p className="text-light mb-5">{t("factsdescription")}</p>
            </div>
          </div>
          <div
            className="col-lg-6 facts-counter wow fadeIn service-item"
            data-wow-delay="0.5s"
          >
            <div className="h-100 px-4 pe-lg-0">
              <div className="row g-5">
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    15
                  </h1>
                  <p className="fs-5 text-primary"> {t("client")} </p>
                </div>
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    15
                  </h1>
                  <p className="fs-5 text-primary"> {t("project")} </p>
                </div>
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    23
                  </h1>
                  <p className="fs-5 text-primary">{t("award")}</p>
                </div>
                <div className="col-sm-6">
                  <h1 className="display-5" data-toggle="counter-up">
                    15
                  </h1>
                  <p className="fs-5 text-primary">{t("team")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
