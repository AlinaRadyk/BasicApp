import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface Props {
  testID?: string;
  title?: string;
  checked: boolean;
  onChange: () => void;
  customStyles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
