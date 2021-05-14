import {Dimensions} from 'react-native';

const SMALL_SCREEN_WIDTH = 360; // Example. (mido) Redmi Note 4x 5.5 inch with original stock room.

export const isSmallScreen = () => {
  let {width} = Dimensions.get('window'); // window screen width.
  // return SMALL_SCREEN_WIDTH <= width;
  return !width > SMALL_SCREEN_WIDTH;
};
