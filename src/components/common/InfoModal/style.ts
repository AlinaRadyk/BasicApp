import { StyleSheet } from 'react-native';

import {
  COLORS,
  SHADOWS,
  FONT_SIZE12,
  FONT_SIZE16,
  REGULAR_LINE_HEIGHT,
} from 'constants/index';

export default StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalViewContent: {
    width: '70%',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    ...SHADOWS.intensive,
  },
  button: {
    fontSize: FONT_SIZE16,
    color: COLORS.brand,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    lineHeight: REGULAR_LINE_HEIGHT,
    letterSpacing: 0.4,
    paddingHorizontal: 15,
    fontSize: FONT_SIZE16,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 5,
  },
  thankYouText: {
    fontSize: FONT_SIZE12,
    lineHeight: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  modalButton: {
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  modalFirstButton: {
    width: '50%',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 14,
  },
  modalSecondButton: {
    width: '50%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 14,
    borderLeftColor: COLORS.border,
    borderLeftWidth: 0.5,
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: COLORS.border,
  },
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor: COLORS.border,
  },
});
