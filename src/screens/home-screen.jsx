import {StatusBar, View} from 'react-native';
import React from 'react';
import {homescreenStyle} from './styles';
import CarItem from '../components/car-item';

const HomeScreen = () => {
  return (
    <View style={homescreenStyle.container}>
      <CarItem />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
