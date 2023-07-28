import React from "react";
import styles from "./Home.module.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/SideBar";

function Home() {
  return (
    <div>
      <Header />
      <hr className='p-0 m-0' />
      <Sidebar />
    </div>
  );
}

export default Home;
