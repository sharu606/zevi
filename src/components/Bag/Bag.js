import React from "react";
import Header from "../Header/Header";
import styles from "./Bag.module.css";
import { useSelector } from "react-redux";
import Product from "../Product/Product";

function Bag() {
  const products = useSelector((state) => state.products.data);

  return (
    <>
      <Header />
      <hr className='p-0 m-0' />
      <div className={styles.productsList}>
        {products.map((product, i) => {
          if (product.bagged === 1) {
            return <Product remove={true} key={i} data={product} index={i} />;
          }
        })}
      </div>
    </>
  );
}

export default Bag;
