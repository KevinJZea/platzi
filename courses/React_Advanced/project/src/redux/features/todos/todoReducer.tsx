import { createReducer } from '@reduxjs/toolkit';
import { addTodo, removeTodo } from './todoActions';

export type Todo = {
  id: number;
  text: string;
};

type TodosState = Todo[];

const initialState: TodosState = [];

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo: Todo = { id: state.length + 1, text: action.payload };
      return [...state, newTodo];
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    });
});
