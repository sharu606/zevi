import React from "react";
import styles from "./Trends.module.css";
import { Image } from "react-bootstrap";

function TrendsCard(props) {
  return (
    <div className='m-2'>
      <Image src={props.img} className={styles.trendsImg + " mb-1"} />
      <p className={styles.trendsDesc}>{props.desc}</p>
    </div>
  );
}

export default TrendsCard;
