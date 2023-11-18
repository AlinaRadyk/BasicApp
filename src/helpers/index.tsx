import Keychain from 'react-native-keychain';
import uuid from 'react-native-uuid';

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
