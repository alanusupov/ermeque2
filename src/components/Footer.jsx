import React from "react";
import iron from "../media/iron.png";
import insta from "../media/insta.svg";
import phone from "../media/phone.svg";
import geo from "../media/geo.svg";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-logo-wrap">
          <img src={iron} alt="iron logo" />
          <p>УТЮЖОК</p>
        </div>
        <div className="footer-list">
          <div className="footer-item">
            <h4 className="footer-sub">{t("h2")}</h4>
            <p>Пн-Пт</p>
            <p>0:00 до 0:00</p>
          </div>

          <div className="footer-item">
            <h4 className="footer-sub">{t("f1")}</h4>
            <p className="footer-subitem">
              <img src={insta} alt="" />
              irontexitle
            </p>
            <p className="footer-subitem">
              <img src={phone} alt="" />
              0555555555
            </p>
            <p className="footer-subitem">
              <img src={phone} alt="" />
              0555777555
            </p>
          </div>

          <div className="footer-item">
            <h4 className="footer-sub">адрес</h4>
            <p className="footer-subitem">
              <img src={geo} alt="" />
              {t("h1")}
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Copyright 2023. All Right Reserved By akatsukidev
      </div>
    </footer>
  );
}

export default Footer;
