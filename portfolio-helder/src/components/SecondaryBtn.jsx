import React from "react";
import "../styles/SecondaryBtn.css";

class SecondaryBtn extends React.Component {
  render() {
    const { btnText } = this.props
    return (
      <button className="secondary-btn">{btnText}</button>
    )
  }
}

export default SecondaryBtn;
