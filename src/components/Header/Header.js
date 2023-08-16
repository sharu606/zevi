import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";
import ModalContext from "../Modal/ModalContext";
import { FaHeart, FaHome } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

function Header(props) {
  const { setShow, setSearch } = useContext(ModalContext);

  return (
    <header className={styles.header + " p-3"}>
      <Row className='p-0 m-0'>
        <Col className={styles.collapseSec}>
          <Link to='/'>
            <FaHome />
          </Link>
        </Col>
        <Col xs={6} className={styles.searchSec}>
          {!props.disable && (
            <InputGroup className={styles.searchInp}>
              <Form.Control
                className={styles.searchBox}
                placeholder='Search'
                aria-label='Search'
                aria-describedby='Search'
                onFocus={() => setShow(1)}
                onBlur={() => setShow(0)}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className={styles.searchIcon}>
                <RiSearchLine />
              </button>
            </InputGroup>
          )}
        </Col>
        <Col className={styles.logo}>
          <Link to='/wishlist'>
            <FaHeart className={styles.heart + " mx-2"} />
          </Link>
          <Link to='/bag'>
            <MdShoppingBag className={styles.bag + " mx-2"} />
          </Link>
        </Col>
      </Row>
    </header>
  );
}

Header.defaultProps = {
  disable: true,
};

export default Header;
