import { StyleSheet } from 'react-native';

import {
  COLORS,
  FONT_SIZE16,
  REGULAR_FONT_SIZE,
  PADDING_HORIZONTAL,
  REGULAR_LINE_HEIGHT,
} from 'constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: COLORS.black,
  },
  viewUserBlock: {
    flexDirection: 'row',
    padding: PADDING_HORIZONTAL,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  userImageView: {
    width: 80,
  },
  whiteText: {
    color: COLORS.white,
  },
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  username: {
    fontSize: FONT_SIZE16,
    lineHeight: REGULAR_LINE_HEIGHT,
    fontWeight: '600',
    width: '100%',
    flexWrap: 'wrap',
  },
  roleText: {
    fontSize: REGULAR_FONT_SIZE,
    lineHeight: REGULAR_LINE_HEIGHT,
    color: COLORS.black,
    width: '100%',
    flexWrap: 'wrap',
    textTransform: 'capitalize',
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    backgroundColor: COLORS.white,
  },
  faqViewItem: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  nameText: {
    fontSize: FONT_SIZE16,
    lineHeight: REGULAR_LINE_HEIGHT,
    width: '90%',
    flexWrap: 'wrap',
  },
  verifiedDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: COLORS.errorText,
    position: 'absolute',
    top: -1,
    right: 2,
  },
});
