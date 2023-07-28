import React from "react";
import styles from "./SideBar.module.css";
import { Row, Col } from "react-bootstrap";
import Star from "../Star/Star";

function SideBar() {
  return (
    <Row className={styles.body + " p-0 m-0"}>
      <Col xs={3} className={styles.filters + " p-1"}>
        <p>Search Results</p>
        <div className={styles.filtersList + " px-4"}>
          <div className={styles.brand + " py-3"}>
            <p className='p-0 pb-1 m-0'>BRAND</p>
            <div className={styles.checkbox}>
              <input type='checkbox' id='mango' />
              <label for='mango'>Mango</label>
            </div>
            <div className={styles.checkbox}>
              <input type='checkbox' id='hm' />
              <label for='mango'>H & M</label>
            </div>
          </div>
          <hr className='p-0 m-0' />
          <div className={styles.price + " py-3"}>
            <p className='p-0 pb-1 m-0'>PRICE RANGE</p>
            <div className={styles.checkbox}>
              <input type='checkbox' id='500' />
              <label for='500'>Under 500</label>
            </div>
            <div className={styles.checkbox}>
              <input type='checkbox' id='3000' />
              <label for='3000'>1000 To 3000</label>
            </div>
          </div>
          <hr className='p-0 m-0' />
          <div className={styles.price + " py-3"}>
            <p className='p-0 pb-1 m-0'>RATINGS</p>
            <div className={styles.checkbox}>
              <input type='checkbox' id='500' />
              <label for='500'>
                <Star number='5' />
              </label>
            </div>
            <div className={styles.checkbox}>
              <input type='checkbox' id='500' />
              <label for='500'>
                <Star number='4' />
              </label>
            </div>
            <div className={styles.checkbox}>
              <input type='checkbox' id='500' />
              <label for='500'>
                <Star number='3' />
              </label>
            </div>
            <div className={styles.checkbox}>
              <input type='checkbox' id='500' />
              <label for='500'>
                <Star number='2' />
              </label>
            </div>
            <div className={styles.checkbox}>
              <input type='checkbox' id='500' />
              <label for='500'>
                <Star number='1' />
              </label>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SideBar;
