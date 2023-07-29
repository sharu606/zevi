import React, { useContext, useState } from "react";
import styles from "./Products.module.css";
import FilterContext from "../FilterContext";
import { Image } from "react-bootstrap";
import Star from "../Star/Star";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import product1 from "../../assets/product/product1.PNG";

function Products() {
  const [wish, setWish] = useState(0);

  function clickHandler(state) {
    setWish(state);
  }

  const filters = useContext(FilterContext);
  return (
    <div className={styles.productsList}>
      <div className={styles.product}>
        <div className={styles.productHeader}>
          <div className={styles.imgCon + " mb-2"}>
            <Image
              src={product1}
              alt='product1'
              className={styles.productImg}
            />
          </div>
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
        <div className={styles.productDesc + " p-1"}>
          <p className='p-0 m-0'>Long A-line kurta</p>
          <p className={" p-0 py-1 m-0"}>
            <span className={styles.priceBef}>
              <s>Rs.599</s>
            </span>
            <span className={styles.priceAft}>Rs.549</span>
          </p>
          <Star number='4' />
          <span className={styles.noOfReviews}>(210)</span>
        </div>
      </div>
    </div>
  );
}

export default Products;
