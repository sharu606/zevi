import React from "react";
import { FaStar } from "react-icons/fa";

function Star(props) {
  const stars = [];

  for (let i = 0; i < props.number; i++) {
    stars.push(<FaStar size={18} color='gold' key={i} />);
  }
  for (let i = 0; i < 5 - props.number; i++) {
    stars.push(<FaStar size={18} color='gray' key={i} />);
  }

  return <div>{stars}</div>;
}

export default Star;
