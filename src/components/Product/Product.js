import React from "react";
import styles from "./Product.module.css";
import { Image } from "react-bootstrap";
import Star from "../Star/Star";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/index";
import { Link } from "react-router-dom";

function Product(props) {
  const dispatch = useDispatch();

  function clickHandler(state, index) {
    console.log(9);
    dispatch(productActions.wished({ state, index }));
  }

  function removeHandler() {
    dispatch(productActions.addToBag({ state: 0, index: props.index }));
  }

  return (
    <div className={styles.product + " m-3"}>
      <div className={styles.productHeader}>
        <div className={styles.imgCon + " mb-2"}>
          <Image
            src={props.data.img}
            alt='product1'
            className={styles.productImg}
          />
          <Link to={`/${props.index}`}>
            <div className={styles.popup + " p-1"}>View Product</div>
          </Link>
          {props.data.wished === 0 && (
            <FaRegHeart
              className={styles.unheart}
              onClick={() => clickHandler(1, props.index)}
            />
          )}
          {props.data.wished === 1 && (
            <FaHeart
              className={styles.heart}
              onClick={() => clickHandler(0, props.index)}
            />
          )}
        </div>
      </div>
      <div className={styles.productDesc + " p-1"}>
        <div className={styles.title + " p-0 m-0"}>{props.data.title}</div>
        <div className={styles.desc + " p-0 m-0"}>{props.data.desc}</div>
        <p className={" p-0 py-1 m-0"}>
          <span className={styles.priceBef}>
            <s>Rs.{props.data.before}</s>
          </span>
          <span className={styles.priceAft}>Rs.{props.data.after}</span>
        </p>
        <Star number={props.data.stars} />
        <span className={styles.noOfReviews}>({props.data.reviews})</span>
      </div>
      {props.remove && (
        <button className={styles.remove + " py-1"} onClick={removeHandler}>
          REMOVE FROM BAG
        </button>
      )}
    </div>
  );
}

Product.defaultProps = {
  remove: false,
};

export default Product;
