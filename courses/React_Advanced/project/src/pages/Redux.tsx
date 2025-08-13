import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { addTodo, removeTodo } from '../redux/features/todos/todoActions';
import type { Todo } from '../redux/features/todos/todoReducer';
import './Redux.css';

const Redux = () => {
  return <TodoList />;
};

const emojiMap: { [key: string]: string } = {
  eat: '🍔',
  sleep: '🛌',
  exercise: '🏋️',
};

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAddTodo = () => {
    const mappedText = emojiMap[todoText.toLocaleLowerCase()] || todoText;

    if (mappedText.trim()) {
      dispatch(addTodo(mappedText));
      setTodoText('');
    }
  };

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <em>Made with Redux Toolkit</em>
      <h1>Emoji Todo List</h1>

      <input
        placeholder="Add New Todo"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAddTodo();
        }}
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

export default Redux;
