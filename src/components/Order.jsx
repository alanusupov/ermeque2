import React from "react";

function Order() {
  const [form, setForm] = useState({});
  return (
    <div className="order">
      <div className="container">
        <h3 className="order-title">Сделать предзаказ</h3>
        <p className="order-text">
          Примечание : цена одного метра 4 сома, при заказе от 500 метров
          доставка бесплатная
        </p>
        <div className="order-form">
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Order;
