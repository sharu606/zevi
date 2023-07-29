import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Star.module.css";

function Star(props) {
  const stars = [];

  for (let i = 0; i < props.number; i++) {
    stars.push(
      <FaStar size={20} color='gold' key={i} className={styles.icon} />
    );
  }
  for (let i = 10; i < 15 - props.number; i++) {
    stars.push(
      <FaStar size={20} color='gray' key={i} className={styles.icon} />
    );
  }

  return <span>{stars}</span>;
}

export default Star;
