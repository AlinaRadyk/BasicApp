import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  title?: string;
  withBackButton?: boolean;
  children?: ReactNode;
  customStyles?: StyleProp<ViewStyle>;
  contentStyles?: StyleProp<ViewStyle>;
  onBackPress?: () => void;
  backButtonTestId?: string;
}
