import React, { FC } from 'react';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { View, Pressable, Modal } from 'react-native';

import { COLORS, MODES } from 'constants/index';

import Card from 'components/common/Card';

import { getMode } from 'modules/app/selectors';

import styles from 'components/common/InfoModal/style';
import { Props } from 'components/common/InfoModal/types';

const InfoModal: FC<Props> = ({
  setInvisible,
  onPressButton,
  title,
  subTitle,
  buttonName,
  children,
  visible,
  secondButtonName,
  onPressSecondButton,
  modalTestId,
  titleTestId,
  subTitleTestId,
  firstButtonTestId,
  secondButtonTestId,
}) => {
  const mode = useSelector(state => getMode(state));
  const isDarkMode = mode === MODES.DARK;
  const color = isDarkMode ? COLORS.white : COLORS.black;
  return (
    <Modal
      transparent
      animationType="none"
      onRequestClose={setInvisible}
      visible={visible}
      testID={modalTestId}
    >
      <Pressable style={styles.modalView} onPress={setInvisible}>
        <Card customStyles={styles.modalViewContent}>
          <Text testID={titleTestId} style={[styles.titleText, { color }]}>
            {title}
          </Text>
          {Boolean(subTitle) && (
            <Text testID={subTitleTestId} style={[styles.thankYouText, { color }]}>{subTitle}</Text>
          )}
          {children}
          <View style={[onPressSecondButton ? styles.viewButton : styles.viewButtons]}>
            {onPressSecondButton && (
              <Pressable
                testID={secondButtonTestId}
                onPress={onPressSecondButton}
                style={[styles.modalButton, styles.modalFirstButton]}
              >
                <Text style={styles.button}>{secondButtonName}</Text>
              </Pressable>
            )}
            <Pressable
              onPress={onPressButton}
              testID={firstButtonTestId}
              style={[styles.modalButton, onPressSecondButton && styles.modalSecondButton]}
            >
              <Text style={styles.button}>{buttonName || 'OK'}</Text>
            </Pressable>
          </View>
        </Card>
      </Pressable>
    </Modal>
  );
};

export default InfoModal;
