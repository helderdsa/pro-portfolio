import React from "react";
import "../styles/primaryBtnStyle.css";

class PrimaryBtn extends React.Component {
  render() {
    const { btnText } = this.props
    return (
      <button class="btn">{btnText}</button>
    )
  }
}

export default PrimaryBtn;
