import React from "react";
import { useState } from "react";
import LoadingAnimaion from "../components/LoadingAnimaion";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import SkillDisplay from "../components/SkillDisplay";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3000);
  return (
    <div>
      {loading ? (
        <LoadingAnimaion />
      ) : (
        <div>
          <h1>Inicio de uma história</h1>
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
