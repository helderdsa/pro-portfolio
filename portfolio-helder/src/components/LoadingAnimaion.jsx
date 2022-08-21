import React from "react";
import "../styles/LoadingAnimation.css";
const LoadingAnimaion = () => {
  return (
    <div>
      <h3 className="loading-title">Loading...</h3>
      <div class="gooey">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimaion;
