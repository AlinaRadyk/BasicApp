import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

const useForegroundHandler = (handler: () => void) => {
  useEffect(() => {
    const onChange = (state: AppStateStatus) => {
      if (state === 'active') {
        handler();
      }
    };

    const subscription = AppState.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, [handler]);
};

export default useForegroundHandler;
