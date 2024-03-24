import {StatusBar, View} from 'react-native';
import React from 'react';
import {homescreenStyle} from './styles';
import CarsList from '../components/cars-list';
import Header from '../components/header';

const HomeScreen = () => {
  return (
    <View style={homescreenStyle.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
