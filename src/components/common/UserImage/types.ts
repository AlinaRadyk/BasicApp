import { StyleProp, ViewStyle, ImageStyle } from 'react-native';

export interface Props {
  size?: number;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  user?: {
    image: string | null;
    username: string;
  };
}
