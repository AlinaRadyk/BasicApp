import { StyleSheet } from 'react-native';

import { COLORS, FONT_SIZE16 } from 'constants/index';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    fontSize: FONT_SIZE16,
    color: COLORS.white,
    marginHorizontal: 5,
    marginLeft: 20,
  },
  disabledText: {
    color: COLORS.disabledColor,
  },
});
