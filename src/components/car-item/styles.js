import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';

export const carItemStyle = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute', // in order not to push our components underneath
  },
});
