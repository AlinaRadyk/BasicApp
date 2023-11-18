import { StyleSheet } from 'react-native';

import {
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
  DEVICE_WIDTH,
  COLORS,
} from 'constants/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    width: DEVICE_WIDTH - PADDING_HORIZONTAL * 2,
    marginHorizontal: PADDING_HORIZONTAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
    marginVertical: PADDING_HORIZONTAL / 2,
    borderRadius: 10,
  },
  viewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 36,
    marginRight: 10,
  },
  userInfo: {
    maxWidth: '75%',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    marginVertical: 5,
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.tabBarInactiveBackgroundColor,
  },
  occupationText: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.black,
    textAlign: 'center',
  },
  viewOccupation: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: PADDING_VERTICAL,
    backgroundColor: COLORS.border,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
