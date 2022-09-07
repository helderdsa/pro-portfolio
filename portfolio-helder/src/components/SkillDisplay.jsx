import React from "react";
import '../styles/skillDisplayStyle.css'

const SkillDisplay = (props) => {
  return (
    <div className="skill">
        <div>
            <div className="img-skill">
                <img src="../imgs/logo512.png" alt=""/>
            </div>
            <h6 className="skill-name">Vue.JS</h6>
            <div className="white-test">
              <p className="skill-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sem non nibh fringilla maximus porttitor sagittis est. Suspendisse accumsan ex eget lobortis consectetur. Morbi eget nunc elementum, eleifend lacus vitae</p>
            </div>
            <div className="bar"></div>
        </div>
    </div>
  )
}

export default SkillDisplay;
