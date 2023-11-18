import { useState, useEffect } from 'react';

import { getEncryptionKey } from 'helpers/index';

type EncryptionKey = {
  isFresh: boolean;
  key: string | number[] | null;
}

const EncryptionGate = ({ children }) => {
  const [encryptionKey, setEncryptionKey] = useState<EncryptionKey>({
    isFresh: false,
    key: null,
  });

  const handleSetEncriptionKey = async () => {
    const { isFresh, key } = await getEncryptionKey();
    setEncryptionKey({ isFresh, key });
  };

  useEffect(() => {
    handleSetEncriptionKey();
  }, []);

  if (!encryptionKey.key) {
    return null;
  }
  return children(encryptionKey);
};

export default EncryptionGate;
