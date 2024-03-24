import {View, Image} from 'react-native';
import React from 'react';
import {headerStyle} from './style';

const Header = () => {
  return (
    <View style={headerStyle.container}>
      <Image
        style={headerStyle.logo}
        source={require('../../assets/logo.png')}
      />
      <Image
        style={headerStyle.menu}
        source={require('../../assets/menu.png')}
      />
    </View>
  );
};

export default Header;
