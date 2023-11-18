import { StyleSheet } from 'react-native';

import {
  COLORS,
  FONT_SIZE16,
  REGULAR_LINE_HEIGHT,
} from 'constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: COLORS.black,
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    backgroundColor: COLORS.white,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  viewItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  nameText: {
    width: '90%',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    fontSize: FONT_SIZE16,
    lineHeight: REGULAR_LINE_HEIGHT,
  },
});
