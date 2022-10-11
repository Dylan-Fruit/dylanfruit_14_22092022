import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ setModaleOpened }) => {
  const closeModale = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) setModaleOpened(false);
  };

  return (
    <div className="modale-container" onClick={(e) => closeModale(e)}>
      <div className="modale-container-elements">
        <div className="modale-cotainer-elements-close-btn">
          <button className="close-btn" onClick={() => setModaleOpened(false)}>
            {<FontAwesomeIcon icon={faXmark} />}
          </button>
        </div>
        <FontAwesomeIcon icon={faCircleCheck} />
        <p>Employee created !</p>
      </div>
    </div>
  );
};

export default Modal;
