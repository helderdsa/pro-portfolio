import React from "react";
import { useState } from "react";
import LoadingAnimaion from "../components/LoadingAnimaion";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import SkillDisplay from "../components/SkillDisplay";
import NavBar from "../components/NavBar";

import heroImg from '../imgs/ftsite.png'
import '../styles/Home.css'

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3000);
  return (
    <div>
      {loading ? (
        <LoadingAnimaion />
        ) : (
        <div>
          <NavBar />
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
          <PrimaryBtn btnText={"Primary"} />
          <SecondaryBtn btnText={"Secondary"} />
          <SkillDisplay />
          <SkillDisplay />
        </div>
      )}
    </div>
  );
};

export default Home;
