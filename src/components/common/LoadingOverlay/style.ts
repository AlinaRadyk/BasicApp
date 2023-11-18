import { StyleSheet } from 'react-native';

import { COLORS, DEVICE_WIDTH, DEVICE_HEIGHT } from 'constants/index';

export default StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 99,
    left: 0,
    marginTop: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: COLORS.transparentWhite,
  },
  loader: {
    zIndex: 999,
  },
});
