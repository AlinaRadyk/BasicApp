import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  setInvisible: () => void;
  onPressButton: () => void;
  onPressSecondButton?: () => void;
  title?: string;
  subTitle?: string;
  visible?: boolean;
  buttonName?: string;
  secondButtonName?: string;
  children?: ReactNode;
  customStyles?: StyleProp<ViewStyle>;
  modalTestId?: string;
  titleTestId?: string;
  subTitleTestId?: string;
  firstButtonTestId?: string;
  secondButtonTestId?: string;
}
