import React, { useState } from "react";
import styles from "./Body.module.css";
import { Row, Col } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import FilterContext from "../FilterContext";
import Products from "../Products/Products";
import Modal from "../Modal/Modal";

function Body() {
  const [checked, setChecked] = useState({
    mango: 0,
    hm: 0,
    500: 0,
    3000: 0,
    rating: {
      1: 0,
      3: 0,
      4: 0,
      5: 0,
      2: 0,
    },
  });

  const handleCheckChange = (event) => {
    const { name } = event.target;

    setChecked((prev) => {
      const items = { ...prev };
      items[name] = ~items[name];
      return items;
    });
  };

  const handleRatingChange = (event) => {
    const { name } = event.target;

    setChecked((prev) => {
      const items = { ...prev, rating: { ...prev.rating } };
      items.rating[name] = ~items.rating[name];
      return items;
    });
  };

  return (
    <FilterContext.Provider value={checked}>
      <Modal />
      <Row className={styles.body + " p-0 m-0"}>
        <Col xs={1} md={3} className={styles.filters + " p-1"}>
          <SideBar
            handleCheckChange={handleCheckChange}
            handleRatingChange={handleRatingChange}
          />
        </Col>
        <Col>
          <Products />
        </Col>
      </Row>
    </FilterContext.Provider>
  );
}

export default Body;
