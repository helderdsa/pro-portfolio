import React from "react";
import "../styles/SecondaryBtn.css";

const SecondaryBtn = (props) => {
  return (
    <button className="secondary-btn">{props.btnText}</button>
  )
}

export default SecondaryBtn;
