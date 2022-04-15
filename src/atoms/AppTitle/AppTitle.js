import React from 'react';

import {StyleSheet, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={{
        ...styles.text,
        color: isDarkMode ? Colors.white : Colors.black,
      }}
    >
      My Neighbour React Native
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
