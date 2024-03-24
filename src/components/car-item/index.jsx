import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {carItemStyle} from './styles';
import StyledButton from '../styled-button';

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
      <StyledButton
        color="black"
        content={'custom order'}
        onPress={() => {
          console.warn('Custom Order was pressed.');
        }}
      />
      <StyledButton
        color="white"
        content={'existing inventory'}
        onPress={() => {
          console.warn('existing inventory was pressed.');
        }}
      />
    </View>
  );
};

export default CarItem;
