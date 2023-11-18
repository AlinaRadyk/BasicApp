import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  customStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
}
