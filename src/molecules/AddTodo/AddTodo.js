import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../stores/todo/slice';

import {StyleSheet, View, useColorScheme} from 'react-native';

import TextInput from '../../atoms/TextInput/TextInput';
import AddButton from '../../atoms/AddButton/AddButton';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = React.useState('');

  const onChangeText = text => {
    setNewTodo(text);
  };

  const addNewTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <TextInput text={newTodo} onChangeText={onChangeText} />
      <View style={styles.buttonContainer}>
        <AddButton onPress={addNewTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    marginLeft: 10,
  },
});
