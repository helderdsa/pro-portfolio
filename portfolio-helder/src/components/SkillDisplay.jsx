import React from "react";
import '../styles/skillDisplayStyle.css'

const SkillDisplay = (props) => {
  const { name, description, image } = props
  return (
    <div className="skill">
        <div>
            <div className="img-skill">
                <img src={image} alt={name}/>
            </div>
            <h6 className="skill-name">{name}</h6>
            <div className="white-test">
              <p className="skill-description">{description}</p>
            </div>
            <div className="bar"></div>
        </div>
    </div>
  )
}

export default SkillDisplay;
