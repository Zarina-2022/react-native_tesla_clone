import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/home-screen';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
