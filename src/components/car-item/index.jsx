import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {carItemStyle} from './styles';

const CarItem = () => {
  return (
    <View style={carItemStyle.carContainer}>
      <ImageBackground
        source={require('../../assets/ModelS.jpeg')}
        style={carItemStyle.image}
      />
      <View style={carItemStyle.titles}>
        <Text style={carItemStyle.title}>Model S</Text>
        <Text style={carItemStyle.subtitle}>Starting at $49,450</Text>
      </View>
    </View>
  );
};
 
export default CarItem;
