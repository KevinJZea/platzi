import React from "react";
import { TodoContext } from "../todoContext/TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const handleClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button onClick={handleClickButton} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
