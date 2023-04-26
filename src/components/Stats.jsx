import React from "react";
import { useTranslation } from "react-i18next";
import SmallModal from "./SmallModal";

function Stats() {
  const { t, i18n } = useTranslation();

  return (
    <div id="order" className="stats">
      <div className="stats-inner container">
        <div className="stats-left">
          <h3 className="stats-title">
            {i18n.resolvedLanguage === "ru" ? (
              <>
                На нашем счет <br /> <span>50+ </span>успешных заказов
              </>
            ) : (
              <>
                <span> 50+</span> ийгиликтүү заказдар
              </>
            )}
          </h3>
          <p className="stats-text">{t("c2")}</p>
          <SmallModal text={t("c3")} />
          {/* <button className="button">Заказать</button> */}
        </div>
        <div className="stats-right">
          <div className="stats-right-item">
            <p className="stats-right-num">50+</p>
            <p className="stats-right-info">{t("c4")}</p>
          </div>
          <div className="stats-right-item">
            <p className="stats-right-num">100 000+</p>
            <p className="stats-right-info">{t("c5")}</p>
          </div>
          <div className="stats-right-item">
            <p className="stats-right-num">8</p>
            <p className="stats-right-info">{t("c6")}</p>
          </div>
          <div className="stats-right-item">
            <p className="stats-right-num">0</p>
            <p className="stats-right-info">{t("c7")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
