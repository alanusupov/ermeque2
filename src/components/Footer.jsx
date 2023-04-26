import React from "react";
import iron from "../media/iron.png";
import insta from "../media/insta.svg";
import phone from "../media/phone.svg";
import geo from "../media/geo.svg";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer id="contact" className="footer">
        <h3 className="footer-title">{t("b1")}</h3>
        <div className="footer-inner container">
          <div className="footer-item">
            <div className="footer-item-top">
              <div className="footer-item-top-logo">
                <img src={insta} alt="instagram" />
              </div>
              <div className="footer-item-top-info">
                <h5>{t("b2")}</h5>
                <h4>Instagram</h4>
              </div>
            </div>
            <p className="footer-item-text">utujok</p>
          </div>
          <div className="footer-item">
            <div className="footer-item-top">
              <div className="footer-item-top-logo">
                <img src={phone} alt="instagram" />
              </div>
              <div className="footer-item-top-info">
                <h5>24/7</h5>
                <h4>{t("b3")}</h4>
              </div>
            </div>
            <p className="footer-item-text">+996 709 213 599</p>
          </div>
          <div className="footer-item">
            <div className="footer-item-top">
              <div className="footer-item-top-logo">
                <img src={geo} alt="instagram" />
              </div>
              <div className="footer-item-top-info">
                <h5>Локация</h5>
                <h4>Адрес</h4>
              </div>
            </div>
            <p className="footer-item-text">{t("b4")}</p>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        &copy; Copyright 2023. All Right Reserved By akatsukidev
      </div>
    </>
  );
}

export default Footer;
