import { StyleSheet } from 'react-native';

import { DEVICE_WIDTH, PADDING_HORIZONTAL } from 'constants/index';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: DEVICE_WIDTH - PADDING_HORIZONTAL,
    paddingHorizontal: 0,
  },
});
