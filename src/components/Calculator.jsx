import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import arrow from "../media/arrow.svg";
function Calculator() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [meters, setMeters] = useState(0);
  const [total, setTotal] = useState(0);
  const { t } = useTranslation();
  const getSum = () => {
    const type = selectValue === "рулон" ? 4 : 5;
    if (type) {
      let totalSum = type * meters;
      setTotal(totalSum);
    }
  };
  return (
    <div className="calc">
      <div className="container">
        <h3 className="calc-title">КАЛЬКУЛЯТОР МЕТРАЖА</h3>
        <div className="calc-form">
          <div className="calc-input-wrap">
            <input
              type="number"
              onChange={e => setMeters(Number(e.target.value))}
            />
            <p> метраж </p>
          </div>
          <div className="calc-input-wrap">
            <div
              onClick={() => setSelectOpen(!selectOpen)}
              className="calc-select"
              name="type"
              id="">
              {selectValue && selectValue}
              {selectOpen && (
                <div className="calc-options">
                  <div
                    className="calc-option"
                    onClick={() => setSelectValue("рулон")}>
                    рулон
                  </div>
                  <div className="calc-line"></div>
                  <div
                    className="calc-option"
                    onClick={() => setSelectValue("книжка")}>
                    книжка
                  </div>
                </div>
              )}
              {selectOpen ? (
                <img src={arrow} alt="" className="calc-arrow-up calc-arrow" />
              ) : (
                <img src={arrow} alt="" className="calc-arrow" />
              )}
            </div>

            <p> форма</p>
          </div>
          <div className="calc-sum-wrap">
            <div className="calc-sum">{total}</div>
            <p>сумма</p>
          </div>
        </div>

        <button onClick={() => getSum()} className="calc-btn">
          {t("c1")}
        </button>
      </div>
    </div>
  );
}

export default Calculator;
