import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VideosHeader = () => {
  const { t } = useTranslation(["video"]);
  return (
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ marginTop: "150px" }}
    >
      <div className="container py-5">
        <h1
          className="display-4 animated slideInDown mb-4"
          style={{ color: "#ecf8f8" }}
        >
          {t("videoheader")}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">{t("homepath")}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {t("vidpath")}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default VideosHeader;
