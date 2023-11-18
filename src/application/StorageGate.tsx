import AsyncStorage from '@react-native-async-storage/async-storage';

import { configureStore } from 'config/store';

const StoreGate = ({ encryptionKey, children }) => {
  if (encryptionKey.isFresh) {
    AsyncStorage.clear();
  }
  return children(configureStore(encryptionKey));
};

export default StoreGate;
