import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";
import { TodoContext } from "./context/TodoContext";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";

function AppUI() {
  const { loading, error, filteredTodos, completeTodo, removeTodo, openModal } =
    React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      {/* <TodoContext.Consumer>
        {({ loading, error, filteredTodos, completeTodo, removeTodo }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && filteredTodos.length === 0 && <EmptyTodos />}

            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onRemove={() => removeTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer> */}

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && filteredTodos.length === 0 && <EmptyTodos />}

        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onRemove={() => removeTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
