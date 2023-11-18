import React, { FC } from 'react';
import { Text } from 'react-native-paper';

import { Props } from 'components/common/TabBarLabel/types';
import styles from 'components/common/TabBarLabel/style';

const TabBarLabel: FC<Props> = ({ focused, tabBarLabel, focusedColor }) => (
  <Text style={[styles.label, focused && [styles.focused, { color: focusedColor }]]}>
    {tabBarLabel}
  </Text>
);

export default TabBarLabel;
