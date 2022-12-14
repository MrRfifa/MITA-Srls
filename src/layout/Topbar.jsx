import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block fixed-top mb-5"
        style={{ height: "50px" }}
      >
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2"></small>
              <small>info@example.com</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-clock me-2"></small>
              <small>Mon - Fri : 09 AM - 09 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <Link className="text-white-50 ms-4" to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="text-white-50 ms-4" to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="text-white-50 ms-4" to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link className="text-white-50 ms-4" to="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
