import React from "react";
import { useTranslation } from "react-i18next";
import vidsrc from "../media/introvid.mp4";
function Info() {
  const { t } = useTranslation();
  return (
    <div className="info">
      <div className="info-example">
        <div className="info-example-info">
          <h3 className="info-example-title">{t("e")}</h3>
          <p>{t("e1")}</p>
          <p>{t("e2")}</p>
        </div>
        <div className="info-example-video">
          <video controls>
            <source src={vidsrc} />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Info;
