import React, { useReducer, useState } from 'react';
import './Reducer.css';

type State = {
  todos: Todo[];
};

type Todo = {
  id: string;
  text: string;
};

type Action =
  | { type: 'ADD_TODO'; payload: Todo['text'] }
  | { type: 'REMOVE_TODO'; payload: Todo['id'] };

const initalState: State = {
  todos: [],
};

const todoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = { id: crypto.randomUUID(), text: action.payload };
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

const emojiMap: { [key: string]: string } = {
  eat: '🍔',
  sleep: '🛌',
  exercise: '🏋️',
};

const Reducer = () => {
  return <TodoList />;
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initalState);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    const mappedText = emojiMap[todoText.toLocaleLowerCase()] || todoText;

    if (mappedText.trim()) {
      dispatch({ type: 'ADD_TODO', payload: mappedText });
      setTodoText('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') handleAddTodo();
  };

  return (
    <div>
      <em>Made with useReducer</em>
      <h1>Emoji Todo List</h1>

      <input
        placeholder="Add a new todo"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reducer;
