import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { Row, Col, Image } from "react-bootstrap";
import Star from "../Star/Star";
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { productActions } from "../../store/index";

function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) => state.products.data[params.id]);
  const [size, setSize] = useState(38);

  function addHandler() {
    dispatch(productActions.addToBag({ index: params.id, state: 1 }));
  }

  function wishHandler(state) {
    dispatch(productActions.wished({ index: params.id, state: state }));
  }

  return (
    <>
      <Header />
      <hr className='p-0 m-0' />
      <Row className='p-0 m-0'>
        <Col md={6} className={styles.left + " pr-5"}>
          <div className={styles.container}>
            <Image src={product.img} className={styles.productImg} />
          </div>
        </Col>
        <Col className={styles.right + " p-3"}>
          <div>
            <p className={styles.title + " p-0 m-0"}>{product.title}</p>
            <p className={styles.desc + " p-0 m-0"}>{product.desc}</p>
            <div className='my-2'>
              <Star number={product.stars} />
              <span className={styles.before + " mx-1"}>
                | {product.reviews} Ratings
              </span>
            </div>
            <hr />
            <span className={styles.after + " mr-2"}>
              &#8377;{product.after}
            </span>
            <s>
              <span className={styles.before}>MRP &#8377;{product.before}</span>
            </s>
            <p className={styles.tax + " p-0 m-0 mt-1"}>
              inclusive of all taxes
            </p>
            <p className={styles.size + " mt-3"}>SELECT SIZE</p>
            <div className={styles.sizes}>
              {[38, 40, 42, 44, 46, 48].map((s, i) => (
                <button
                  className={`${styles.sizeBtn} mx-1 ${
                    size === s ? styles.selected : ""
                  }`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className='my-3'>
              {product.bagged === 0 && (
                <button
                  className={styles.addBtn + " mr-4 px-5 py-2"}
                  onClick={addHandler}
                >
                  <MdShoppingBag /> ADD TO BAG
                </button>
              )}
              {product.bagged === 1 && (
                <Link className={styles.addBtn + " mr-4 px-5 py-2"} to='/bag'>
                  <MdShoppingBag /> GO TO BAG
                </Link>
              )}
              {product.wished === 0 && (
                <button
                  className={styles.wishBtn + " mr-4 px-5 py-2"}
                  onClick={() => wishHandler(1)}
                >
                  <FaHeart /> WISHLIST
                </button>
              )}
              {product.wished === 1 && (
                <button
                  className={styles.wishBtn + " mr-4 px-5 py-2"}
                  onClick={() => wishHandler(0)}
                >
                  <FaHeart className={styles.heart} /> WISHLISTED
                </button>
              )}
            </div>
            <hr />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetails;
