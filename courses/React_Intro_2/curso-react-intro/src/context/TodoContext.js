import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const createNewTodo = (todoText) => ({ text: todoText, completed: false });

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addTodo = (text) => {
    const newTodos = [...todos, createNewTodo(text)];
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((newTodo) => newTodo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const removeTodo = (text) => {
    const newTodos = [...todos];
    const filteredNewTodos = newTodos.filter(
      (newTodo) => newTodo.text !== text
    );
    saveTodos(filteredNewTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        addTodo,
        completeTodo,
        removeTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        filteredTodos,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
