import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { DefaultTheme, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigator from 'navigation';

import { COLORS, MODES } from 'constants/index';

import { getMode } from 'modules/app/selectors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.brand,
  },
};

const themeDark = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: COLORS.brand,
  },
};

const Provider: FC = () => {
  const mode = useSelector(state => getMode(state));
  const isDarkMode = mode === MODES.DARK;
  return (
    <PaperProvider theme={isDarkMode ? themeDark : theme}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={COLORS.black} />
        <Navigator />
      </View>
    </PaperProvider>
  );
};

export default Provider;
