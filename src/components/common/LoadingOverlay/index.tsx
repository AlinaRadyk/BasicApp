import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';

import { COLORS, MODES } from 'constants/index';

import { getMode } from 'modules/app/selectors';

import styles from 'components/common/LoadingOverlay/style';

const LoadingOverlay = () => {
  const mode = useSelector(state => getMode(state));
  const isDarkMode = mode === MODES.DARK;
  return (
    <View style={[styles.overlay, isDarkMode && { backgroundColor: COLORS.transparentBlack }]}>
      <ActivityIndicator style={styles.loader} size="large" color={COLORS.brand} />
    </View>
  );
};

export default LoadingOverlay;
