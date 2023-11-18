import 'react-native-get-random-values';
import * as CryptoJS from 'crypto-js';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, createTransform } from 'redux-persist';

import { appInit } from 'modules/app/actions';

import rootReducer from 'config/rootReducer';
import rootSaga from 'config/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (encryptionKey) => {
  const SetTransform = createTransform(
    (inboundState) => {
      return CryptoJS.AES.encrypt(JSON.stringify(inboundState), encryptionKey.key).toString();
    },
    (outboundState) => {
      const bytes = CryptoJS.AES.decrypt(outboundState, encryptionKey.key);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    },
    { whitelist: ['app', 'auth'] },
  );

  const config = {
    key: 'BasicProject',
    storage: AsyncStorage,
    transforms: [SetTransform],
  };

  const persistedReducer = persistReducer(config, rootReducer);
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  const persistor = persistStore(store, null, () => store.dispatch(appInit()));
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
