import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Row, Col, InputGroup, Form, Image } from "react-bootstrap";
import { RiSearchLine } from "react-icons/ri";
import logo from "../../assets/logo.PNG";
import ModalContext from "../Modal/ModalContext";

function Header() {
  const { show, setShow } = useContext(ModalContext);

  return (
    <header className={styles.header + " p-3"}>
      <Row className='p-0 m-0'>
        <Col></Col>
        <Col xs={6} className={styles.searchSec}>
          <InputGroup className={styles.searchInp}>
            <Form.Control
              className={styles.searchBox}
              placeholder='Search'
              aria-label='Search'
              aria-describedby='Search'
              onFocus={() => setShow(1)}
              onBlur={() => setShow(0)}
            />
            <button className={styles.searchIcon}>
              <RiSearchLine />
            </button>
          </InputGroup>
        </Col>
        <Col className={styles.logo}>
          <Image src={logo} alt='Logo' />
        </Col>
      </Row>
    </header>
  );
}

export default Header;
