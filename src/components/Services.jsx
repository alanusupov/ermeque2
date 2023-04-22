import React from "react";
import s1 from "../media/s1.svg";
import s2 from "../media/s2.svg";
import s3 from "../media/s3.svg";
import s5 from "../media/s5.svg";
import s4 from "../media/s4.svg";
import { useTranslation } from "react-i18next";
function Services() {
  const { t } = useTranslation();
  return (
    <div className="services container">
      <h3 className="services-title">{t("s1")}</h3>
      <ul className="services-list">
        <li className="services-list-item">
          <img src={s1} alt="" />
          <p>{t("s2")}</p>
        </li>
        <li className="services-list-item">
          <img src={s2} alt="" />
          <p>{t("s3")}</p>
        </li>
        <li className="services-list-item">
          <img src={s3} alt="" />
          <p>{t("s4")}</p>
        </li>
        <li className="services-list-item">
          <img src={s4} alt="" />
          <p>{t("s5")}</p>
        </li>
        <li className="services-list-item">
          <img src={s5} alt="" />
          <p>{t("s6")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Services;
