import { StyleSheet } from 'react-native';

import { COLORS, FONT_SIZE16 } from 'constants/index';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingBottom: 0,
  },
  viewTittle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.progressInactive,
  },
  title: {
    fontSize: FONT_SIZE16,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
    width: '80%',
  },
});
