import React, { useContext } from "react";
import { useSelector } from "react-redux";
import styles from "./Products.module.css";
import FilterContext from "../FilterContext";
import Product from "../Product/Product";
import ModalContext from "../Modal/ModalContext";

function Products() {
  const filters = useContext(FilterContext);
  const { search } = useContext(ModalContext);
  const products = useSelector((state) => state.products.data);

  function filter(p) {
    console.log(p);
    if (search !== "") {
      console.log(p.toLowerCase().includes(search.toLowerCase()));
      return p.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  }

  return (
    <div className={styles.productsList + " p-3"}>
      {filters.roadster +
        filters.indian +
        filters[3000] +
        filters[500] +
        filters.rating[1] +
        filters.rating[2] +
        filters.rating[3] +
        filters.rating[4] +
        filters.rating[5] ===
        0 &&
        products.map((product, index) => {
          if (filter(product.desc)) {
            return <Product key={index} data={product} index={index} />;
          }
        })}
      {filters.roadster +
        filters.indian +
        filters[3000] +
        filters[500] +
        filters.rating[1] +
        filters.rating[2] +
        filters.rating[3] +
        filters.rating[4] +
        filters.rating[5] !==
        0 &&
        products.map((product, index) => {
          if (
            (filters.roadster + filters.indian === 0 ||
              (filters.roadster + filters.indian !== 0 &&
                filters[product.brand] === -1)) &&
            (filters[3000] + filters[500] === 0 ||
              (filters[500] === -1 && product.after <= 500) ||
              (filters[3000] === -1 &&
                1000 <= product.after &&
                product.after <= 3000)) &&
            (filters.rating[1] +
              filters.rating[2] +
              filters.rating[3] +
              filters.rating[4] +
              filters.rating[5] ===
              0 ||
              (filters.rating[1] +
                filters.rating[2] +
                filters.rating[3] +
                filters.rating[4] +
                filters.rating[5] !==
                0 &&
                filters.rating[product.stars] === -1))
          ) {
            if (filter(product.desc)) {
              return <Product key={index} data={product} index={index} />;
            }
          }
        })}
    </div>
  );
}

export default Products;
