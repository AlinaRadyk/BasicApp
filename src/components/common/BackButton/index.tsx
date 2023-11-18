import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from 'components/common/Button';

import { Props } from 'components/common/BackButton/types';
import styles from 'components/common/BackButton/style';

export const HEADER_BACK_BUTTON = 'HEADER_BACK_BUTTON';

const BackButton: React.FC<Props> = ({ onPress, testID, customStyles }) => {
  const navigation = useNavigation();
  const handleBack = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };
  return (
    <Button
      testID={testID || HEADER_BACK_BUTTON}
      style={[styles.button, customStyles]}
      onPress={handleBack}
      mode="text"
      labelStyle={styles.iconSize}
      icon="chevron-left"
    />
  );
};

export default BackButton;
