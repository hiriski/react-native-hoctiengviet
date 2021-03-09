import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    left: 10,
    alignItems: 'center',
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignContent: 'center',
  },
  titleText: {
    fontSize: 17,
    fontFamily: 'HKGrotesk-Bold',
  },
});
