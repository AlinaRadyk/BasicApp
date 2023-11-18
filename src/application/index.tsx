import 'react-native-gesture-handler';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import EncryptionGate from 'application/EncriptionGate';
import StoreGate from 'application/StorageGate';

import PaperProvider from 'application/PaperProvider';

import '../i18n';

function App() {
  return (
    <EncryptionGate>
      {(encryptionKey) => (
        <StoreGate encryptionKey={encryptionKey}>
          {({ store, persistor }) => (
            <StoreProvider store={store}>
              <PersistGate persistor={persistor}>
                <PaperProvider />
              </PersistGate>
            </StoreProvider>
          )}
        </StoreGate>
      )}
    </EncryptionGate>
  );
}

export default App;
