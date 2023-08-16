import React from "react";
import Header from "../Header/Header";
import styles from "./WishList.module.css";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

function WishList() {
  const products = useSelector((state) => state.products.data);

  return (
    <>
      <Header />
      <hr className='p-0 m-0' />
      <div className={styles.productsList}>
        {products.map((product, i) => {
          if (product.wished === 1) {
            return <Product key={i} data={product} index={i} />;
          }
        })}
      </div>
    </>
  );
}

export default WishList;
