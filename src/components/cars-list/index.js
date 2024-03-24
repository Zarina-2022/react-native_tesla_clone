import {View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {carListStyle} from './styles';
import cars from './cars';
import CarItem from '../car-item';

const CarsList = () => {
  return (
    <View style={carListStyle.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'} // baslangic yeri
        decelerationRate={'fast'} // the speed of the animation while moving the screen
        snapToInterval={Dimensions.get('window').height} // how big is one item in this flatlist (height of the item)
      />
    </View>
  );
};

export default CarsList;
