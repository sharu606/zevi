import React, { useContext } from "react";
import styles from "./Products.module.css";
import FilterContext from "../FilterContext";
import Product from "../Product/Product";

function Products() {
  const filters = useContext(FilterContext);
  const productData = [
    {
      after: 549,
      before: 599,
      desc: "Long A-line kurta",
      stars: 4,
      reviews: 210,
      brand: "mango",
    },
    {
      after: 1349,
      before: 1399,
      desc: "Long A-line kurta",
      stars: 4,
      reviews: 567,
      brand: "hm",
    },
    {
      after: 549,
      before: 599,
      desc: "Straps Longline Regular Top",
      stars: 4,
      reviews: 23,
      brand: "mango",
    },
    {
      after: 749,
      before: 799,
      desc: "Straps Longline Regular Top",
      stars: 5,
      reviews: 355,
      brand: "mango",
    },
    {
      after: 649,
      before: 699,
      desc: "Pleated Floral Embroidered Top",
      stars: 3,
      reviews: 67,
      brand: "hm",
    },
    {
      after: 549,
      before: 599,
      desc: "Long A-line kurta",
      stars: 4,
      reviews: 443,
      brand: "hm",
    },
    {
      after: 349,
      before: 399,
      desc: "Pleated Floral Embroidered Top",
      stars: 5,
      reviews: 564,
      brand: "mango",
    },
    {
      after: 649,
      before: 699,
      desc: "Embroidered Top",
      stars: 3,
      reviews: 123,
      brand: "hm",
    },
  ];

  return (
    <div className={styles.productsList + " p-3"}>
      {filters.mango +
        filters.hm +
        filters[3000] +
        filters[500] +
        filters.rating[1] +
        filters.rating[2] +
        filters.rating[3] +
        filters.rating[4] +
        filters.rating[5] ===
        0 &&
        productData.map((product, index) => (
          <Product key={index} data={product} index={index} />
        ))}
      {filters.mango +
        filters.hm +
        filters[3000] +
        filters[500] +
        filters.rating[1] +
        filters.rating[2] +
        filters.rating[3] +
        filters.rating[4] +
        filters.rating[5] !==
        0 &&
        productData.map((product, index) => {
          if (
            (filters.mango + filters.hm === 0 ||
              (filters.mango + filters.hm !== 0 &&
                filters[product.brand] == -1)) &&
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
            return <Product key={index} data={product} index={index} />;
          }
        })}
    </div>
  );
}

export default Products;
