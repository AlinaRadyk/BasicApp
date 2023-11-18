import { StyleProp, ViewStyle } from 'react-native';

type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'visible-password'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'number-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search'
  | undefined;

export interface Props {
  testID?: string;
  errorTestId?: string;
  icon?: string;
  label?: string;
  name: string;
  placeholder?: string;
  values: object;
  errors: object;
  touched: object;
  handleBlur: any;
  handleChange: any;
  onEndEditing?: () => void;
  isPassword?: boolean;
  multiline?: boolean;
  keyboardType?: KeyboardType;
  infoText?: string;
  customStyles?: StyleProp<ViewStyle>;
}
