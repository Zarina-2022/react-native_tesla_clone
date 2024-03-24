import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 100,
    position: 'absolute',
    top: 50,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
