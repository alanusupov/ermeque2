import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/main.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "./i18";
const firebaseConfig = {
  apiKey: "AIzaSyAiMFkbnBmA6ikJyWoecIVfRz_R3ormzrs",
  authDomain: "utujok-9bfea.firebaseapp.com",
  projectId: "utujok-9bfea",
  storageBucket: "utujok-9bfea.appspot.com",
  messagingSenderId: "599552911726",
  appId: "1:599552911726:web:9c13bc06a38b0b68ae397f",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
