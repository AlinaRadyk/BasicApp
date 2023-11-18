import { StyleSheet } from 'react-native';

import { COLORS, FONT_SIZE12 } from 'constants/index';

export default StyleSheet.create({
  label: {
    fontSize: FONT_SIZE12,
    fontWeight: '300',
    color: COLORS.tabBarInactiveBackgroundColor,
  },
  focused: {
    fontWeight: '600',
  },
});
