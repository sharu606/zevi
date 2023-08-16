import React from "react";
import styles from "./SideBar.module.css";
import Star from "../Star/Star";

function SideBar(props) {
  return (
    <div className={styles.sideBar}>
      <p>Search Results</p>
      <div className={styles.filtersList + " px-4"}>
        <div className={styles.brand + " py-3"}>
          <p className='p-0 pb-1 m-0'>BRAND</p>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='roadster'
              name='roadster'
              onChange={props.handleCheckChange}
            />
            <label for='roadster'>Roadster</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='indian'
              name='indian'
              onChange={props.handleCheckChange}
            />
            <label for='indian'>Indian Terrain</label>
          </div>
        </div>
        <hr className='p-0 m-0' />
        <div className={styles.price + " py-3"}>
          <p className='p-0 pb-1 m-0'>PRICE RANGE</p>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='500'
              name='500'
              onChange={props.handleCheckChange}
            />
            <label for='500'>Under 500</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='3000'
              name='3000'
              onChange={props.handleCheckChange}
            />
            <label for='3000'>1000 To 3000</label>
          </div>
        </div>
        <hr className='p-0 m-0' />
        <div className={styles.rating + " py-3"}>
          <p className='p-0 pb-1 m-0'>RATINGS</p>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='5'
              name='5'
              onChange={props.handleRatingChange}
            />
            <label for='5'>
              <Star number='5' />
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='4'
              name='4'
              onChange={props.handleRatingChange}
            />
            <label for='4'>
              <Star number='4' />
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='3'
              name='3'
              onChange={props.handleRatingChange}
            />
            <label for='3'>
              <Star number='3' />
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='2'
              name='2'
              onChange={props.handleRatingChange}
            />
            <label for='2'>
              <Star number='2' />
            </label>
          </div>
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id='1'
              name='1'
              onChange={props.handleRatingChange}
            />
            <label for='1'>
              <Star number='1' />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
