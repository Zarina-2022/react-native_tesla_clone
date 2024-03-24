import {StatusBar, View} from 'react-native';
import React from 'react';
import {homescreenStyle} from './styles';
import CarItem from '../components/car-item';

const HomeScreen = () => {
  return (
    <View style={homescreenStyle.container}>
      <CarItem
        name={'Model S'}
        tagline={'Order online for'}
        image={require('../assets/ModelS.jpeg')}
        taglineCTA={'Touchless Delivery'}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
