import { StyleSheet } from 'react-native';

import { COLORS, FONT_SIZE12, REGULAR_FONT_SIZE } from 'constants/index';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 6,
  },
  label: {
    fontSize: REGULAR_FONT_SIZE,
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: COLORS.transparent,
  },
  errorStyle: {
    borderColor: COLORS.errorText,
  },
  icon: {
    marginTop: 15,
  },
  errorText: {
    fontSize: FONT_SIZE12,
    color: COLORS.errorText,
    marginTop: 5,
    display: 'none',
  },
});
