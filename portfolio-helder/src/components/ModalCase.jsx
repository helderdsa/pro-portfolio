import "../styles/modal.css"

function ModalCase({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}
      </div>
      <div className="modal-buttons">
        <button onClick={onClose}>X</button>
        <button onClick={onClose}>git</button>
        <button onClick={onClose}>online</button>
      </div>
    </div>
  )
}

export default ModalCase;