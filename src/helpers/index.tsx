import Keychain from 'react-native-keychain';
import uuid from 'react-native-uuid';
import _ from 'lodash';

import { ENCRYPTION_KEY } from 'constants/index';

export const isEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const getEncryptionKey = async () => {
  // check for existing credentials
  const existingCredentials = await Keychain.getGenericPassword();
  if (existingCredentials) {
    return { isFresh: false, key: existingCredentials.password };
  }
  // generate new credentials based on random string
  const randomBytes = uuid.v4();
  const hasSetCredentials = await Keychain.setGenericPassword(ENCRYPTION_KEY, `${randomBytes}`);
  if (hasSetCredentials) {
    return { isFresh: true, key: randomBytes };
  }
  return { isFresh: false, key: null };
};

export const getInitials = (userName: string) => {
  const words = userName.split(' ');
  const initials = words.map(word => word.charAt(0));
  return initials.join('');
};

export const orderByQuadrant = (data) => {
  const quadrantOrder = {
    NW: 0, NE: 1, SW: 2, SE: 3,
  };

  const sortedData = _.sortBy(data, [
    (item) => quadrantOrder[item.quadrant.toUpperCase()],
    'camera_location',
  ]);

  return sortedData;
};
