import React, { FC } from 'react';
import { Button, Text } from 'react-native-paper';

import { COLORS } from 'constants/index';

import styles from 'components/common/Button/style';
import { Props } from 'components/common/Button/types';

const ActionButton: FC<Props> = ({
  icon,
  title,
  mode = 'contained',
  onPress,
  compact,
  testID,
  style,
  disabled,
  textStyle,
  textColor,
  labelStyle,
}) => (
  <Button
    compact={compact}
    uppercase={false}
    style={[styles.container, style]}
    testID={testID}
    disabled={disabled}
    icon={icon}
    textColor={disabled ? COLORS.disabledColor : textColor}
    mode={mode}
    labelStyle={labelStyle}
    onPress={onPress}
  >
    {Boolean(title) && (
      <Text style={[styles.text, textStyle, disabled && styles.disabledText]}>{title}</Text>
    )}
  </Button>
);

export default ActionButton;
