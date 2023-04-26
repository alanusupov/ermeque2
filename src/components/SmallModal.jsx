import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "..";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function SmallModal({ text }) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    meter: "",
    date: "",
  });
  const toggle = () => setModal(!modal);

  const handleChange = e => {
    const { value, name } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = e => {
    e.preventDefault();
    if (form.name && form.address && form.phone) {
      setStep(2);
    }
  };
  const createDoc = async (data, collectionId, docId) => {
    if (docId) {
      await setDoc(doc(db, collectionId, docId), data);
    } else {
      await addDoc(collection(db, collectionId), data);
    }
  };
  const sendData = async e => {
    e.preventDefault();
    if (form.name && form.address && form.meter && form.phone) {
      setLoading(true);
      try {
        await createDoc(form, "requests");
        setLoading(false);
        setStep(1);
        setForm({
          name: "",
          address: "",
          phone: "",
          meter: "",
          date: "",
        });
        toggle();
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    }
  };
  return (
    <div>
      <button className="button" onClick={toggle}>
        {text}
      </button>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalBody>
          {step === 1 ? (
            <div>
              <form onSubmit={handleNext} className="smallmodal-form" action="">
                <input
                  onChange={handleChange}
                  value={form.name}
                  name="name"
                  type="text"
                  placeholder={t("p3")}
                />
                <input
                  onChange={handleChange}
                  value={form.phone}
                  name="phone"
                  type="text"
                  placeholder={t("p4")}
                />
                <input
                  onChange={handleChange}
                  value={form.address}
                  name="address"
                  type="text"
                  placeholder="Адрес"
                />
                <button className="button">Далее</button>
              </form>
            </div>
          ) : (
            <div>
              <form onSubmit={sendData} action="" className="smallmodal-form">
                <input
                  onChange={handleChange}
                  value={form.meter}
                  name="meter"
                  type="text"
                  required
                  placeholder={t("p5")}
                />
                <input
                  onChange={handleChange}
                  value={form.date}
                  name="date"
                  type="text"
                  required
                  placeholder={t("p6")}
                />
                <button className="button">
                  {loading ? "loading..." : "Оформить предзаказ"}{" "}
                </button>
              </form>
            </div>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default SmallModal;
