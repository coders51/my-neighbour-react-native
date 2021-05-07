import {todoSlice, addTodo, removeTodo} from './slice';
import uuid from 'react-native-uuid';

describe('todo reducer', () => {
  it('should return initial state on first run', () => {
    const nextState = {
      list: [],
    };
    const result = todoSlice.reducer(undefined, {});

    expect(result).toEqual(nextState);
  });

  it('should add todo to list', () => {
    const todoState = todoSlice.reducer(undefined, addTodo('newTodo'));

    expect(todoState.list[0].text).toEqual('newTodo');
  });

  it('should remove todo from list', () => {
    const id = uuid.v4();
    const todoState = todoSlice.reducer(
      {list: [{id, text: 'oldTodo'}]},
      removeTodo(id),
    );

    expect(todoState.list.length).toEqual(0);
  });
});
