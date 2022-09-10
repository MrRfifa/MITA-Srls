import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["contact"]);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-6 fw-bold mb-5">{t("contacttitle")}</h1>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">{t("nameholder")}</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">{t("emailholder")}</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">{t("subjectholder")}</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="message">{t("messageholder")}</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit">
                    {t("buttontitle")}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: "450px" }}
          >
            <div className="position-relative rounded overflow-hidden h-100">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d45425.66990049874!2d10.9153534!3d44.6357838!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1662398534700!5m2!1sit!2sit"
                width="600"
                height="450"
                style={{ border: "0", minHeight: "450px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                aria-hidden="false"
                tabIndex="0"
                className="position-relative w-100 h-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
