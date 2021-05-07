import React from 'react';
import useAxios from 'axios-hooks';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {StyleSheet, View, useColorScheme} from 'react-native';

import FetchButton from '../../atoms/FetchButton/FetchButton';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [{data}, refetch] = useAxios(
    {
      url: 'https://reqres.in/api/users/1?delay=1',
      method: 'PUT',
    },
    {manual: true},
  );

  const onPress = () => {
    refetch();
  };

  console.log(data);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <FetchButton onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
