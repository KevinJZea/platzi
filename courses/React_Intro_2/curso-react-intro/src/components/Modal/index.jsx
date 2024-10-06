import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../../context/TodoContext";
import "./Modal.css";

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);

  React.useEffect(() => {
    const closeModalWhenEscape = (event) =>
      event.key === "Escape" && setOpenModal(false);

    document.addEventListener("keyup", closeModalWhenEscape);

    return () => document.removeEventListener("keyup", closeModalWhenEscape);
  }, [setOpenModal]);

  return ReactDOM.createPortal(
    <div className="Modal">
      <div
        className="Modal-background"
        onClick={(event) => {
          event.stopPropagation();
          setOpenModal(false);
        }}
      ></div>
      <div className="Modal-children-container">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
