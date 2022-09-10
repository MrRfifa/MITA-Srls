import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { MdPlace, MdPhone, MdMail } from "react-icons/md";
import "../assets/css/style.css";

const Footer = () => {
  const { t } = useTranslation("common");
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  return (
    <div
      className="container-fluid footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h1 className="text-white mb-4">
              <img
                className="img-fluid me-3"
                src="img/icon/icon-02-light.png"
                alt=""
              />
              M.I.T.A
            </h1>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="d-flex pt-2">
              <Link className="btn btn-square me-1" to="#">
                <i class="fab fa-facebook-f "></i>
              </Link>
              <Link className="btn btn-square me-1" to="#">
                <i class="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">{t("address")}</h5>
            <p>
              <i className="me-3" style={{ fontSize: "25px" }}>
                <MdPlace />
              </i>
              123 Street, Parma, Italy
            </p>
            <p>
              <i className="me-3" style={{ fontSize: "25px" }}>
                <MdPhone />
              </i>
              +012 345 67890
            </p>
            <p>
              <i className="me-3" style={{ fontSize: "25px" }}>
                <MdMail />
              </i>
              info@example.com
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">{t("quicklinks")}</h5>

            <Link className="btn btn-link" to="/contact">
              {t("contact")}
            </Link>
            <Link className="btn btn-link" to="/services">
              {t("services")}
            </Link>
            <Link className="btn btn-link" to="/videos">
              {t("videos")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link to="#">MITA Srls</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <Link to="https://htmlcodex.com">HTML Codex</Link>
              <br />
              Distributed By:
              <Link to="https://themewagon.com" target="_blank">
                ThemeWagon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
