import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {map} from 'lodash';

import {StyleSheet, View, useColorScheme} from 'react-native';

import Todo from '../../atoms/Todo/Todo';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import {removeTodo} from '../../stores/todo/slice';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const todos = useSelector(state => state.todo.list);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      {map(todos, todo => (
        <View key={todo.id} style={styles.row}>
          <Todo text={todo.text} />
          <DeleteButton onPress={() => dispatch(removeTodo(todo.id))} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
