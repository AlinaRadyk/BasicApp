import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface Props {
  testID?: string;
  title?: string;
  textColor?: string;
  disabled?: boolean;
  compact?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  icon?: string;
  mode?: 'text' | 'contained' | 'outlined' | undefined;
}
