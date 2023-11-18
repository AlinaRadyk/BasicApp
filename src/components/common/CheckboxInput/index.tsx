import React, { FC } from 'react';
import { Checkbox } from 'react-native-paper';

import { COLORS } from 'constants/index';

import styles from 'components/common/CheckboxInput/style';
import { Props } from 'components/common/CheckboxInput/types';

const CheckboxInput: FC<Props> = ({
  title,
  testID,
  checked,
  onChange,
  customStyles,
  textStyle,
}) => (
  <Checkbox.Item
    testID={testID}
    label={title || ''}
    status={checked ? 'checked' : 'unchecked'}
    onPress={onChange}
    position="leading"
    mode="android"
    style={[styles.container, customStyles]}
    uncheckedColor={COLORS.disabledButton}
    color={COLORS.brand}
    labelStyle={textStyle}
  />
);

export default CheckboxInput;
