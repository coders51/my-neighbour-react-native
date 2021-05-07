import React from 'react';

import {StyleSheet, TextInput, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default ({onChangeText, text}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TextInput
      testID="textInput"
      style={{...styles.input, color: isDarkMode ? Colors.white : Colors.black}}
      onChangeText={onChangeText}
      value={text}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 5,
    borderWidth: 1,
    width: 200,
  },
});
