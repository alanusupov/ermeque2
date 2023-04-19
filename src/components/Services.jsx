import React from "react";
import s1 from "../media/s1.svg";
import s2 from "../media/s2.svg";
import s3 from "../media/s3.svg";
import s5 from "../media/s5.svg";
import s4 from "../media/s4.svg";
function Services() {
  return (
    <div className="services container">
      <h3 className="services-title">В наши услуги входят</h3>
      <ul className="services-list">
        <li className="services-list-item">
          <img src={s1} alt="" />
          <p>Консультация</p>
        </li>
        <li className="services-list-item">
          <img src={s2} alt="" />
          <p>Быстрая и качественная пропарка</p>
        </li>
        <li className="services-list-item">
          <img src={s3} alt="" />
          <p>Бесплатная доставка при заказе от 500 метров</p>
        </li>
        <li className="services-list-item">
          <img src={s4} alt="" />
          <p>Загрузка и выгрузка товара</p>
        </li>
        <li className="services-list-item">
          <img src={s5} alt="" />
          <p>Возможна онлайн оплата</p>
        </li>
      </ul>
    </div>
  );
}

export default Services;
