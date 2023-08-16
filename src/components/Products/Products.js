import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Products.module.css";
import FilterContext from "../FilterContext";
import Product from "../Product/Product";
import ModalContext from "../Modal/ModalContext";

function Products() {
  const filters = useContext(FilterContext);
  const { search } = useContext(ModalContext);
  const products = useSelector((state) => state.products.data);
  const [sort, setSort] = useState("desc");
  const [sorted, setSorted] = useState(products);

  function filter(p) {
    console.log(p);
    if (search !== "") {
      console.log(p.toLowerCase().includes(search.toLowerCase()));
      return p.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  }

  function handleChange(e) {
    setSort(e.target.value);
    if (sort === "asc") {
      setSorted((prev) => {
        var temp = [...prev];
        temp.sort((a, b) => a.after - b.after);
        return temp;
      });
    } else {
      setSorted((prev) => {
        var temp = [...prev];
        temp.sort((a, b) => b.after - a.after);
        return temp;
      });
    }
  }

  useEffect(() => {
    if (sort === "asc") {
      setSorted((prev) => {
        var temp = [...prev];
        temp.sort((a, b) => a.after - b.after);
        return temp;
      });
    } else {
      setSorted((prev) => {
        var temp = [...prev];
        temp.sort((a, b) => b.after - a.after);
        return temp;
      });
    }
  }, []);

  return (
    <>
      <label for='sort' className='ml-5 mt-2 mr-1'>
        SORT BY
      </label>
      <select name='sort' id='sort' onChange={handleChange}>
        <option value='asc'>From Highest to Lowest price</option>
        <option value='desc'>From Lowest to Highest price</option>
      </select>
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
          sorted.map((product, index) => {
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
          sorted.map((product, index) => {
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
    </>
  );
}

export default Products;
