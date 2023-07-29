import React, { useState } from "react";
import styles from "./Body.module.css";
import { Row, Col } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";

function Body() {
  const [checked, setChecked] = useState({
    mango: 0,
    hm: 0,
    500: 0,
    3000: 0,
    rating: 0,
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
      const items = { ...prev };
      items["rating"] = name;
      return items;
    });
  };

  return (
    <Row className={styles.body + " p-0 m-0"}>
      <Col xs={3} className={styles.filters + " p-1"}>
        <SideBar
          handleCheckChange={handleCheckChange}
          handleRatingChange={handleRatingChange}
        />
      </Col>
    </Row>
  );
}

export default Body;
