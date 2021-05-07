import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {filter} from 'lodash';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, {payload}) => {
      return {
        ...state,
        list: [...state.list, {id: uuidv4(), text: payload}],
      };
    },
    removeTodo: (state, {payload}) => {
      return {
        ...state,
        list: filter(state.list, todo => todo.id !== payload),
      };
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
