import React from "react";
import styles from "./Trends.module.css";
import TrendsCard from "./TrendsCard";
import one from "../../assets/trends/1.PNG";
import two from "../../assets/trends/2.PNG";
import three from "../../assets/trends/3.PNG";
import four from "../../assets/trends/4.PNG";
import five from "../../assets/trends/5.PNG";

function TrendsList() {
  const data = [
    {
      img: one,
      desc: "Shirt with puffed sleeves",
    },
    {
      img: two,
      desc: "Linen jumpsuit",
    },
    {
      img: three,
      desc: "White formal shirt",
    },
    {
      img: four,
      desc: "Pattern dresses",
    },
    {
      img: five,
      desc: "Leather shirt dress",
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((product, index) => (
        <TrendsCard img={product.img} desc={product.desc} />
      ))}
    </div>
  );
}

export default TrendsList;
