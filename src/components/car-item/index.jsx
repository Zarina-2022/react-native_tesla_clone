import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {carItemStyle} from './styles';
import StyledButton from '../styled-button';

const CarItem = ({name, tagline, image, taglineCTA}) => {
  return (
    <View style={carItemStyle.carContainer}>
      <ImageBackground source={image} style={carItemStyle.image} />
      <View style={carItemStyle.titles}>
        <Text style={carItemStyle.title}>{name}</Text>
        <Text style={carItemStyle.subtitle}>
          {tagline} {''}
          <Text style={carItemStyle.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={carItemStyle.btnWrapper}>
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
    </View>
  );
};

export default CarItem;
