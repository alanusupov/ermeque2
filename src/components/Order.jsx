import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { db } from "..";

function Order() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fio: "",
    num: "",
    address: "",
    meters: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = e => {
    const { value, name } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(form);

  const createDoc = async (data, collectionId, docId) => {
    if (docId) {
      await setDoc(doc(db, collectionId, docId), data);
    } else {
      await addDoc(collection(db, collectionId), data);
    }
  };

  const sendData = async () => {
    if (Object.values(form).every(x => x.length > 0)) {
      setLoading(true);
      try {
        await createDoc(form, "requests");
        setForm({ fio: "", num: "", address: "", meters: "", date: "" });
        setLoading(false);
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    }
  };
  return (
    <div className="order">
      <div className="container">
        <h3 className="order-title">{t("p1")}</h3>
        <p className="order-text">{t("p2")}</p>
        <div className="order-form">
          <input
            onChange={handleChange}
            value={form.fio}
            type="text"
            name="fio"
            placeholder={t("p3")}
          />
          <input
            onChange={handleChange}
            value={form.num}
            type="text"
            name="num"
            placeholder={t("p4")}
          />
          <input
            onChange={handleChange}
            value={form.address}
            type="text"
            name="address"
            placeholder="Адрес"
          />
          <input
            onChange={handleChange}
            value={form.meters}
            type="text"
            name="meters"
            placeholder={t("p5")}
          />
          <input
            onChange={handleChange}
            value={form.date}
            type="text"
            name="date"
            placeholder={t("p6")}
          />

          <button onClick={sendData}>{loading ? "loading" : t("p7")}</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
