import React from 'react';

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import AppTitle from '../../atoms/AppTitle/AppTitle';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import TodoList from '../../organisms/TodoList/TodoList';
import Fetch from '../../molecules/Fetch/Fetch';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.keyboardDismiss}
        accessible={false}>
        <View
          style={{
            ...styles.body,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <AppTitle />
          <TodoList />
          <Fetch />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  keyboardDismiss: {
    flex: 1,
  },
  body: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
});
