import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [todoValue, setTodoValue] = React.useState("");
  const [todoValueEmptyError, setTodoValueEmptyError] = React.useState(false);

  const handleCancel = () => setOpenModal(false);

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      addTodo(todoValue);
      setOpenModal(false);
    },
    [addTodo, setOpenModal, todoValue]
  );

  const handleChange = (event) => setTodoValue(event.target.value);

  React.useEffect(() => {
    const handleEnterKey = (event) => {
      if (event.key === "Enter") {
        if (todoValue.length === 0 || todoValue === "\\n")
          return setTodoValueEmptyError(true);

        handleSubmit(event);
      }
    };

    document.addEventListener("keyup", handleEnterKey);

    return () => document.removeEventListener("keyup", handleEnterKey);
  }, [handleSubmit, todoValue, todoValue.length]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Escribe tu nuevo TODO</label>
      <textarea
        id="new-todo"
        name="new-todo"
        placeholder="Cortar cebolla para el almuerzo"
        required
        value={todoValue}
        onChange={handleChange}
      />

      <span className="TodoForm-todoValueEmptyMessage">
        {todoValueEmptyError && "Campo vacío. Escribe un nuevo TODO."}
      </span>

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
