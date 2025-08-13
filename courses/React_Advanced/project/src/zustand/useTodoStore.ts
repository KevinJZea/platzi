import { create } from 'zustand';

type Todo = {
  id: number;
  text: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (text: Todo['text']) => void;
  removeTodo: (id: Todo['id']) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: Todo['text']) =>
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length + 1, text }],
    })),
  removeTodo: (id: Todo['id']) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
