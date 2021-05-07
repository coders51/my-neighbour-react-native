import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {StyleSheet, View, useColorScheme} from 'react-native';

import Todos from '../../molecules/Todos/Todos';
import AddTodo from '../../molecules/AddTodo/AddTodo';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Todos />
      <AddTodo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
