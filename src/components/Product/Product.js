import React, { useState } from "react";
import styles from "./Product.module.css";
import { Image } from "react-bootstrap";
import Star from "../Star/Star";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import product1 from "../../assets/product/product1.PNG";
import product2 from "../../assets/product/product2.PNG";
import product3 from "../../assets/product/product3.PNG";
import product4 from "../../assets/product/product4.PNG";

function Product(props) {
  const [wish, setWish] = useState(0);
  const imgs = [product1, product2, product3, product4];

  function clickHandler(state) {
    setWish(state);
  }

  return (
    <div className={styles.product + " m-3"}>
      <div className={styles.productHeader}>
        <div className={styles.imgCon + " mb-2"}>
          <Image
            src={imgs[props.index % 4]}
            alt='product1'
            className={styles.productImg}
          />

          <div className={styles.popup + " p-1"}>View Product</div>
          {!wish && (
            <FaRegHeart
              className={styles.unheart}
              onClick={() => clickHandler(1)}
            />
          )}
          {wish === 1 && (
            <FaHeart className={styles.heart} onClick={() => clickHandler(0)} />
          )}
        </div>
      </div>
      <div className={styles.productDesc + " p-1"}>
        <p className='p-0 m-0'>{props.data.desc}</p>
        <p className={" p-0 py-1 m-0"}>
          <span className={styles.priceBef}>
            <s>Rs.{props.data.before}</s>
          </span>
          <span className={styles.priceAft}>Rs.{props.data.after}</span>
        </p>
        <Star number={props.data.stars} />
        <span className={styles.noOfReviews}>({props.data.reviews})</span>
      </div>
    </div>
  );
}

export default Product;
