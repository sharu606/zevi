import React, { useContext } from "react";
import styles from "./Modal.module.css";
import TrendsList from "../Trends/TrendsList";
import ModalContext from "./ModalContext";

function Modal() {
  const { show, setShow } = useContext(ModalContext);

  const suggestions = [
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dresses",
    "Solid Tshirts",
  ];

  return (
    <>
      {show === 1 && (
        <div className={styles.trends}>
          <div className={styles.modal + " p-3"}>
            <p className={styles.title}>Latest Trends</p>
            <TrendsList />
            <p className={styles.title + " p-0 m-0 mb-3"}>
              Popular suggestions
            </p>
            <div>
              {suggestions.map((sug, i) => (
                <p className={styles.sug + " p-0 m-0 my-1 ml-1"}>{sug}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
