import React from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Inicio de uma história</h1>
        <PrimaryBtn btnText={ "Primary" }/>
        <SecondaryBtn btnText={ "Secondary" }/>
      </div>
    )
  }
}

export default Home;
