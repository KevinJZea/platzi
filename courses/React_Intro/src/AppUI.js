import React from "react";

import { Modal } from "./components/modal/Modal";
import { TodoContext } from "./components/todoContext/TodoContext";
import { TodoCounter } from "./components/todoCounter/TodoCounter";
import { TodoSearch } from "./components/todoSearch/TodoSearch";
import { TodoList } from "./components/todoList/TodoList";
import { TodoItem } from "./components/todoItem/TodoItem";
import { TodoForm } from "./components/todoForm/TodoForm";
import { CreateTodoButton } from "./components/createTodoButton/CreateTodoButton";

function AppUI() {
  const { error, loading, filteredTodos, completeTodo, deleteTodo, openModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate. Hubo un error...</p>}
        {loading && <p>Cargando. No desesperes...</p>}
        {!loading && !filteredTodos.length && <p>¡Crea tu primer TODO!</p>}

        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeTodo(todo.text)}
            onDelete={deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
