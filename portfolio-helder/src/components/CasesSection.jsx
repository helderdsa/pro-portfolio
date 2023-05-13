import { projects } from "../data/data";
import "../styles/casesSection.css";
import Case from "./Case";

const CasesSection = () => {
  return (
    <main className="main-cases-div">
      {projects.map((project) => (
        <Case
          image={project.image}
          resume={project.resume}
          name={project.name}
          github={project.github}
          live={project.live}
          skillsIds={project.skillsIds}
        />
      ))}
    </main>
  );
};

export default CasesSection;
