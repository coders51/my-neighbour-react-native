import {todoSlice, addTodo, removeTodo} from './slice';
import {v4 as uuidv4} from 'uuid';

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
    const id = uuidv4();
    const todoState = todoSlice.reducer(
      {list: [{id, text: 'oldTodo'}]},
      removeTodo(id),
    );

    expect(todoState.list.length).toEqual(0);
  });
});
