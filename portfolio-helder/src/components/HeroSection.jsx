import React from "react";

import '../styles/heroSection.css';
import heroImg from '../imgs/ftsite.png';
const HeroSection = () => {
  return (
    <div className="quemSou">
      <img src={ heroImg } alt="hero Img" className="heroImg" />
      <div className="texto">
        <h4 className="cta">
          OLÁ!!<img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png" alt="hand wave gif" width="37px"></img>
          <br />
          HELDER DANIEL AQUI
        </h4>
        <h6 className="ctaSec">DEV FRONT-END E UX DESIGNER</h6>
      </div>
    </div>
  )
}
export default HeroSection