import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { db } from "..";

function Intro() {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const toggle = () => setModal(!modal);
  const [loading, setLoading] = useState(false);

  const createDoc = async (data, collectionId, docId) => {
    if (docId) {
      await setDoc(doc(db, collectionId, docId), data);
    } else {
      await addDoc(collection(db, collectionId), data);
    }
  };

  const sendData = async () => {
    if (name && num) {
      setLoading(true);
      try {
        await createDoc({ name, num }, "consultations");
        setLoading(false);
        setName("");
        setNum("");
        toggle();
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    }
  };
  return (
    <div className="intro">
      <div className="intro-info container">
        <h1 className="intro-title">{t("i1")}</h1>
        <p className="intro-text">{t("i2")}</p>
        <button onClick={toggle} className="intro-btn">
          {t("i3")}
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalBody>
          <div className="modal-wrap">
            <input
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
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Intro;
