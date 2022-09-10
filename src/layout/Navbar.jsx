import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import mita_logo from "../assets/img/icon/MITA_LOGO.png";

const Navbar = () => {
  const { i18n, t } = useTranslation("common");

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top mt-0">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            <img className="img-fluid me-3" src={mita_logo} alt="" />
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
            <Link to="/" className="nav-item nav-link">
              {t("home")}
            </Link>
            <Link to="/services" className="nav-item nav-link">
              {t("services")}
            </Link>
            <Link to="/videos" className="nav-item nav-link">
              {t("videos")}
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              {t("contact")}
            </Link>

            <li className="nav-item dropdown">
              <select
                className="nav-link border-0 form-select"
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}
              >
                <option value="en" className="d-flex flex-row ">
                  🇺🇸&emsp; English
                </option>
                <option value="it" className="d-flex flex-row ">
                  🇮🇹&emsp; Italiano
                </option>
                <option value="fr" className="d-flex flex-row ">
                  🇫🇷&emsp; Français
                </option>
              </select>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
