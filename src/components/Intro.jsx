import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { db } from "..";
import vidsrc from "../media/introvid.mp4";
import modalimg from "../media/modalimg.png";
function Intro() {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    meter: "",
    question: "",
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggle = () => setModal(!modal);
  const [loading, setLoading] = useState(false);

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
        await createDoc(form, "consultations");
        setLoading(false);
        setForm({
          name: "",
          address: "",
          phone: "",
          meter: "",
          question: "",
        });
        toggle();
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    }
  };
  return (
    <div className="intro">
      <div className="intro-inner container">
        {/* <h1 className="intro-title">{t("i1")}</h1>
        <p className="intro-text">{t("i2")}</p>
        <button onClick={toggle} className="intro-btn">
          {t("i3")}
        </button> */}
        <div className="intro-info">
          <h1 className="intro-title">УТЮЖОК</h1>
          <h5 className="intro-subtitle">{t("i1")}</h5>
          <p className="intro-text">{t("i2")}</p>
          <button onClick={toggle} className="button">
            {t("i3")}
          </button>
        </div>
        <div className="intro-video">
          <div className="info-example-video">
            <video controls>
              <source src={vidsrc} />
            </video>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="xl">
        <ModalBody>
          <div className="modal-wrap">
            <img className="modal-img" src={modalimg} alt="" />
            <div className="modal-form-wrap">
              <h4 className="modal-title">
                <span> Мы </span>будем рады ответить <span>Вам</span>
              </h4>
              <form onSubmit={sendData} className="modal-form">
                <div className="modal-input-top">
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("p3")}
                  />
                  <input
                    required
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    type="text"
                    placeholder={"Адрес"}
                  />
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("p4")}
                  />
                  <input
                    required
                    name="meter"
                    value={form.meter}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("p5")}
                  />
                </div>
                <textarea
                  onChange={handleChange}
                  value={form.question}
                  placeholder={t("q1")}
                  name="question"
                  id=""
                  cols="30"
                  rows="8"></textarea>
                <button className="button">
                  {loading ? "loading" : t("send")}
                </button>
              </form>
            </div>
            {/* <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder={t("p3")}
            />
            <input
              value={num}
              onChange={e => setNum(e.target.value)}
              type="number"
              placeholder={t("p4")}
            />
            <button onClick={sendData} className="order-button">
              {loading ? "loading" : "Получить консультацию"}
            </button> */}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Intro;
