import { StyleSheet } from 'react-native';

import { PADDING_HORIZONTAL } from 'constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewForm: {
    flex: 2,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
});
