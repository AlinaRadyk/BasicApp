import { StyleSheet } from 'react-native';

import {
  COLORS,
  DEVICE_WIDTH,
  REGULAR_FONT_SIZE,
  PADDING_HORIZONTAL,
  REGULAR_LINE_HEIGHT,
} from 'constants/index';

export default StyleSheet.create({
  viewFormBlock: {
    width: '100%',
  },
  formView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  link: {
    justifyContent: 'flex-end',
    width: '50%',
    margin: 0,
    padding: 0,
  },
  checkBox: {
    maxWidth: (DEVICE_WIDTH - (PADDING_HORIZONTAL * 2)) / 2,
    marginLeft: -9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    width: '90%',
    fontSize: REGULAR_FONT_SIZE,
    lineHeight: REGULAR_LINE_HEIGHT,
    fontWeight: '400',
    color: COLORS.brand,
    textAlign: 'right',
  },
});
