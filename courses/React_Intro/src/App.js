import React from "react";
import { TodoProvider } from "./components/todoContext/TodoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
