import { Dimensions, Platform } from 'react-native';
import i18next from 'i18next';

export const USER = 'User';
export const IS_IOS = Platform.OS === 'ios';
export const PADDING_HORIZONTAL = 16;
export const PADDING_VERTICAL = 10;
export const FONT_SIZE16 = 16;
export const FONT_SIZE12 = 12;
export const REGULAR_LINE_HEIGHT = 22;
export const REGULAR_FONT_SIZE = 14;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const ENCRYPTION_KEY = 'STORAGE_ENCRYPTION_KEY';
export const ERROR = { error: i18next.t('error'), errorText: i18next.t('error_text') };

export const MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const COLORS = {
  black: '#232323',
  blackBackground: '#000000',
  white: '#FFFFFF',
  brand: '#15ABB1',
  border: '#D9D9D9',
  errorText: '#E03939',
  transparentBlack: '#000000BF',
  transparentWhite: '#ffffffBF',
  progressInactive: '#F0F0F0',
  disabledButton: '#CCCED7',
  disabledColor: '#898A91',
  transparent: 'transparent',
  chatDarkBackground: '#121212',
  tabBarInactiveBackgroundColor: '#848689',
  grayBackground: '#EFEFEF',
};

export const HEADER_OPTIONS = {
  headerShown: false,
  gestureEnabled: false,
};

export const SUPPORTED_LANGUAGES = {
  EN: 'en',
  ES: 'es',
};

export const PROFILE_ACTION_BUTTONS_TYPES = {
  SETTINGS: 'settings',
  LOGOUT: 'logout',
  TERMS_AND_CONDITIONS: 'terms_and_conditions',
  PRIVACY_POLICY: 'privacy_policy',
};

export const PROFILE_ACTION_BUTTONS = [
  {
    id: 1,
    key: 'settings',
    type: PROFILE_ACTION_BUTTONS_TYPES.SETTINGS,
  },
  {
    id: 2,
    key: 'terms',
    type: PROFILE_ACTION_BUTTONS_TYPES.TERMS_AND_CONDITIONS,
  },
  {
    id: 3,
    key: 'privacy_policy',
    type: PROFILE_ACTION_BUTTONS_TYPES.PRIVACY_POLICY,
  },
  // {
  //   id: 4,
  //   key: 'logout',
  //   type: PROFILE_ACTION_BUTTONS_TYPES.LOGOUT,
  // },
];

export const LANGUAGES = [
  {
    key: 0,
    name: 'english',
    code: SUPPORTED_LANGUAGES.EN,
  },
  {
    key: 1,
    name: 'spanish',
    code: SUPPORTED_LANGUAGES.ES,
  },
];

export const SHADOWS = {
  intensive: {
    shadowColor: 'rgba(0, 0, 0, 0.23)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 5,
  },
  none: {
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 5,
  },
};

export const X_WIDTH = 375;
export const X_HEIGHT = 812;
export const XSMAX_WIDTH = 414;
export const XSMAX_HEIGHT = 896;

export const IS_IPHONE_X = (() => {
  if (Platform.OS === 'web') {
    return false;
  }

  return (
    (Platform.OS === 'ios'
      && ((DEVICE_HEIGHT >= X_HEIGHT && DEVICE_WIDTH >= X_WIDTH)
        || (DEVICE_HEIGHT >= X_WIDTH && DEVICE_WIDTH >= X_HEIGHT)))
    || (DEVICE_HEIGHT >= XSMAX_HEIGHT && DEVICE_WIDTH >= XSMAX_WIDTH)
    || (DEVICE_HEIGHT >= XSMAX_WIDTH && DEVICE_WIDTH >= XSMAX_HEIGHT)
  );
})();

export const CAMERAS = [
  {
    id: 0,
    camera_url: {
      url: 'http://trafficcam.calgary.ca/loc29.jpg',
      description: 'Camera 30',
    },
    quadrant: 'SE',
    camera_location: '114 Avenue / 52 Street SE',
    point: {
      coordinates: [-113.958331, 50.9504395],
    },
  },
  {
    id: 1,
    camera_url: {
      url: 'http://trafficcam.calgary.ca/loc141.jpg',
      description: 'Camera 142',
    },
    quadrant: 'SW',
    camera_location: '90 Avenue / 24 Street SW',
    point: {
      coordinates: [-114.1177502, 50.9724213],
    },
  },
  {
    id: 2,
    camera_url: {
      url: 'http://trafficcam.calgary.ca/loc89.jpg',
      description: 'Camera 9',
    },
    quadrant: 'NW/NE',
    camera_location: 'Samis Road / Centre Street North',
    point: {
      coordinates: [-114.0624739, 51.0549834],
    },
  },
];
