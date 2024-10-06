import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  const handleOnClick = () => setOpenModal((prevState) => !prevState);
  return (
    <button onClick={handleOnClick} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
