import React from "react";

function Order() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const {value, name} = e.target;
    setForm((prev) => ({
      ...prev, [name]: value
    }))
  }
  return (
    <div className="order">
      <div className="container">
        <h3 className="order-title">Сделать предзаказ</h3>
        <p className="order-text">
          Примечание : цена одного метра 4 сома, при заказе от 500 метров
          доставка бесплатная
        </p>
        <div className="order-form">
        <input onChange={handleChange} value={form.fio} type="text" name="fio" placeholder="ФИО"/>
        <input onChange={handleChange} value={form.num} type="text" name="num" placeholder="Номер телефона"/>
        <input onChange={handleChange} value={form.address} type="text" name="address" placeholder="Адрес"/>
        <input onChange={handleChange} value={form.meters} type="text" name="meters" placeholder="Метраж ткани"/>
        <input onChange={handleChange} value={form.date} type="text" name="date" placeholder="Желаемая дата"/>
        
          <button>
            Оформить предзаказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
