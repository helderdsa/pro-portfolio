import { BsGithub } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { IconContext } from "react-icons";
import "../styles/modal.css";

function ModalCase({ isOpen, onClose, github, live, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">{children}</div>
      <div className="modal-buttons">
        <IconContext.Provider
          value={{ color: "black", className: "modal-button-icon" }}
        >
          <button onClick={onClose}>
            <IoCloseSharp />
          </button>
          {
            github !== "" ? (
              <button>
                <a href={github}>
                  <BsGithub />
                </a>
              </button>
            ) : null
          }
          {
            live !== "" ? (
              <button>
                <a href={live}>
                  <FiExternalLink />
                </a>
              </button>
            ) : null
          }
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default ModalCase;
