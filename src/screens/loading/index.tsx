import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import NAV_ROUTES from 'constants/routes';

import { getUser } from 'modules/auth/selectors';

import styles from 'screens/loading/style';

function LoadingScreen() {
  const navigation = useNavigation();
  const user = useSelector(state => getUser(state));

  const handleNavigate = useCallback(() => {
    if (user) {
      // @ts-ignore
      navigation.navigate(NAV_ROUTES.HOME_SCREEN);
    } else {
      // @ts-ignore
      navigation.navigate(NAV_ROUTES.LOGIN);
    }
  }, [user]);

  useEffect(() => {
    handleNavigate();
  }, [handleNavigate]);

  return <View style={styles.container} />;
}

export default LoadingScreen;
