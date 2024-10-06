import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./context/TodoContext";

/* const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Lalala", completed: false },
]; */

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
