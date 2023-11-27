import React, { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import i18n from 'i18n';

import LoadingOverlay from 'components/common/LoadingOverlay';
import InfoModal from 'components/common/InfoModal';
import BackButton from 'components/common/BackButton';

import LoadingScreen from 'screens/loading';

// AUTH
// import Login from 'screens/auth/Login';
import PrivacyPolicy from 'screens/auth/PrivacyPolicy';
import TermsAndConditions from 'screens/auth/TermsAndConditions';

// MAIN
import Profile from 'screens/home/Profile';
import Settings from 'screens/home/Profile/Settings';
import Languages from 'screens/home/Profile/Languages';

import { BottomTabBar } from 'navigation/BottomTabBar';

import { HEADER_OPTIONS, MODES } from 'constants/index';
import NAV_ROUTES from 'constants/routes';

import { setAlertVisible, clearError, setMode } from 'modules/app/actions';
import {
 getLoading, getError, getErrorText, getAlertVisible, getMode, getLanguage,
} from 'modules/app/selectors';
// import { getUser } from 'modules/auth/selectors';

function Navigator() {
  const { t } = useTranslation();
  const phoneMode = useColorScheme();
  const dispatch = useDispatch();

  const mode = useSelector(state => getMode(state));
  const language = useSelector(state => getLanguage(state));
  const error = useSelector(state => getError(state));
  // const user = useSelector(state => getUser(state));
  const errorText = useSelector(state => getErrorText(state));
  const visible = useSelector(state => getAlertVisible(state));
  const loading = useSelector(state => getLoading(state));

  const isDarkMode = mode === MODES.DARK;

  const handleHideError = useCallback(() => {
    dispatch(clearError());
    dispatch(setAlertVisible());
  }, []);

  const handleSetLanguage = useCallback(async () => {
    await i18n.changeLanguage(language);
  }, []);

  const handleSetMode = useCallback(() => {
    dispatch(setMode(phoneMode));
  }, [phoneMode]);

  const handleRenderLeft = () => <BackButton />;

  useEffect(() => {
    handleSetLanguage();
  }, [handleSetLanguage]);

  useEffect(() => {
    handleSetMode();
  }, [handleSetMode]);

  const Stack = createStackNavigator();

  // const authGroup = () => (
  //   <Stack.Group>
  //     <Stack.Screen name={NAV_ROUTES.LOGIN} component={Login} options={HEADER_OPTIONS} />
  //     <Stack.Screen name={NAV_ROUTES.PRIVACY_POLICY} component={PrivacyPolicy} options={HEADER_OPTIONS} />
  //     <Stack.Screen name={NAV_ROUTES.TERMS_AND_CONDITIONS} component={TermsAndConditions} options={HEADER_OPTIONS} />
  //   </Stack.Group>
  // );

  const mainGroup = () => (
    <Stack.Group>
      <Stack.Screen name={NAV_ROUTES.HOME_SCREEN} component={BottomTabBar} options={HEADER_OPTIONS} />
      <Stack.Screen
        name={NAV_ROUTES.PROFILE}
        component={Profile}
        options={{
          headerTitle: t('profile'),
          headerLeft: handleRenderLeft,
        }}
      />
      <Stack.Screen
        name={NAV_ROUTES.SETTINGS_PROFILE}
        component={Settings}
        options={{
          headerTitle: t('settings'),
          headerLeft: handleRenderLeft,
        }}
      />
      <Stack.Screen
        name={NAV_ROUTES.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={{
          headerTitle: t('privacy_policy'),
          headerLeft: handleRenderLeft,
        }}
      />
      <Stack.Screen
        name={NAV_ROUTES.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
        options={{
          headerTitle: t('terms'),
          headerLeft: handleRenderLeft,
        }}
      />
      <Stack.Screen
        name={NAV_ROUTES.LANGUAGES}
        component={Languages}
        options={{
          headerTitle: t('language'),
          headerLeft: handleRenderLeft,
        }}
      />
    </Stack.Group>
  );

  return (
    <SafeAreaProvider>
      {loading && <LoadingOverlay />}
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name={NAV_ROUTES.INITIAL_SCREEN} component={LoadingScreen} options={HEADER_OPTIONS} />
          {mainGroup()}
        </Stack.Navigator>
      </NavigationContainer>
      {visible && (
        <InfoModal
          title={error}
          subTitle={errorText}
          setInvisible={handleHideError}
          onPressButton={handleHideError}
        />
      )}
    </SafeAreaProvider>
  );
}

export default Navigator;
