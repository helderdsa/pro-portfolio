import React from "react";
import "../styles/LoadingAnimation.css";
const LoadingAnimaion = () => {
  return (
    <div className="gooey">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingAnimaion;
