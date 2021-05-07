import React from 'react';

import {StyleSheet, Text, useColorScheme, TouchableOpacity} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default ({onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity onPress={onPress} testID="addButton">
      <Text
        style={{
          ...styles.text,
          color: isDarkMode ? Colors.white : Colors.black,
        }}>
        Add
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '400',
  },
});
