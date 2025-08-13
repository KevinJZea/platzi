import { useState } from 'react';
import { useTodoStore } from '../zustand/useTodoStore';
import type { Todo } from '../redux/features/todos/todoReducer';
import './Zustand.css';

const Zustand = () => {
  return <TodoList />;
};

const emojiMap: { [key: string]: string } = {
  eat: '🍔',
  sleep: '🛌',
  exercise: '🏋️',
};

const TodoList = () => {
  const { todos, addTodo, removeTodo } = useTodoStore();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    const mappedText = emojiMap[todoText.toLocaleLowerCase()] || todoText;

    if (mappedText.trim()) {
      addTodo(mappedText);
      setTodoText('');
    }
  };

  const handleRemoveTodo = (id: Todo['id']) => removeTodo(id);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleAddTodo();
  };

  return (
    <div>
      <em>Made with Zustand</em>
      <h1>Emoji Todo List</h1>

      <input
        placeholder="Add New Todo"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Zustand;
