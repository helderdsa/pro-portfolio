import "../styles/skillsSectionStyle.css";
import { skills } from "../data/data";

const SkillDisplay = () => {
  return (
    <div className="skills-section">
      <h4>PRINCIPAIS TECNOLOGIAS</h4>
      <div className="skills">
        {skills.map((skill) => (
          <div>
            <img className="skill" alt={skill.name} src={skill.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDisplay;
