import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { filteredTodos, completedTodos, totalTodos, searchValue } =
    React.useContext(TodoContext);

  const content = () => {
    if (searchValue.length > 0) {
      if (filteredTodos.length === 0)
        return `No se encontraron resultados al buscar «${searchValue}»`;
      return `Se encontraron ${filteredTodos} coincidencias.`;
    }

    if (totalTodos === 0) return "¡Crea tus primeros TODOs!";

    if (totalTodos === completedTodos)
      return "¡Felicitaciones! Has completado todos tus TODOs 🥳";

    return `Has completado ${completedTodos} de ${totalTodos} TODOs`;
  };

  return <h1 className="TodoCounter">{content()}</h1>;
}

export { TodoCounter };
