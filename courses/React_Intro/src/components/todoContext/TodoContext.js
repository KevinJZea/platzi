import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const addTodo = (text) => () => {
    const newTodos = [...todos, { completed: false, text }];
    saveTodos(newTodos);
  };

  const completeTodo = (text) => () => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => () => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        loading,
        error,
        filteredTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
