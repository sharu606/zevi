import React from "react";
import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";

function Home() {
  return (
    <div>
      <Header />
      <hr className='p-0 m-0' />
      <Body />
    </div>
  );
}

export default Home;
