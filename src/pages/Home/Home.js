import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppTitle from '../../atoms/AppTitle/AppTitle';

export default ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          ...styles.body,
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <AppTitle text={'My Neighbour React Native'} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}>
          <Text
            style={{
              ...styles.buttonText,
              color: isDarkMode ? Colors.white : Colors.black,
            }}>
            Go to Details
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    marginTop: 50,
  },
  buttonText: {
    fontSize: 15,
  },
});
