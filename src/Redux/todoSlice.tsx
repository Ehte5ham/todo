import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  todos: [],
  dotos: [],
};

export const dotoSlice = createSlice({
  name: 'doto',
  initialState,
  reducers: {
    addDoto: (state, action) => {
      const doto = {
        text: action.payload,
      };
      (state as any).dotos.push(doto);
    },
  },
});
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      (state as any).todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions;
export const {addDoto} = dotoSlice.actions;

export const DotoAdd = dotoSlice.reducer;
export default todoSlice.reducer;
