import { useState } from "react";
import { skills } from "../data/data";
import ModalCase from "./ModalCase";

const Case = (props) => {
  const { image, resume, name, github, live, skillsIds } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="case-body">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="case-img"
        onClick={handleOpenModal}
      >
        <div className="case-name">
          <h6>{name}</h6>
        </div>
      </div>

      <ModalCase
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        github={github}
        live={live}
      >
        <img src={image} alt={`Projeto ${name}`} className="modal-preview" />
        <div className="case-resume">
          <p>{resume}</p>
        </div>
        {skillsIds.map((id) => (
          <img
            src={skills[id].image}
            alt={skills[id].name}
            className="modal-skills"
          />
        ))}
      </ModalCase>
    </div>
  );
};

export default Case;
