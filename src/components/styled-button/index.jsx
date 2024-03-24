import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {buttonStyle} from './styles';
import {COLORS} from '../../thema/colors';

const StyledButton = ({color, content, onPress}) => {
  const btnBackground = color === 'black' ? COLORS.btnBlack : COLORS.btnWhite;
  const textColor = color === 'black' ? COLORS.textWhite : COLORS.textBlack;

  return (
    <View style={buttonStyle.container}>
      <Pressable
        style={[buttonStyle.button, {backgroundColor: btnBackground}]}
        onPress={onPress}>
        <Text style={[buttonStyle.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
