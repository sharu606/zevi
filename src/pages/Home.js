import React, { useState } from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import ModalContext from "../components/Modal/ModalContext";

function Home() {
  const [show, setShow] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <ModalContext.Provider
      value={{
        show: show,
        setShow: setShow,
        search: search,
        setSearch: setSearch,
      }}
    >
      <Header disable={false} />
      <hr className='p-0 m-0' />
      <Body />
    </ModalContext.Provider>
  );
}

export default Home;
