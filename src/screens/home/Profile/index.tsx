import React, { FC, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { List, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UserImage from 'components/common/UserImage';

import NAV_ROUTES from 'constants/routes';
import {
  COLORS, MODES, PROFILE_ACTION_BUTTONS, PROFILE_ACTION_BUTTONS_TYPES,
} from 'constants/index';
import { PROFILE_TEST_IDS } from 'constants/testIds';

import { logoutUser } from 'modules/auth/actions';
import { getUser } from 'modules/auth/selectors';
import { getMode } from 'modules/app/selectors';

import styles from 'screens/home/Profile/style';

const Profile: FC = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const user = useSelector(state => getUser(state));
  const mode = useSelector(state => getMode(state));
  const isDarkMode = mode === MODES.DARK;

  const handleLogOut = useCallback(() => {
    dispatch(logoutUser());
  }, []);

  const handleGetIcon = type => {
    switch (type) {
      case PROFILE_ACTION_BUTTONS_TYPES.TERMS_AND_CONDITIONS:
      case PROFILE_ACTION_BUTTONS_TYPES.PRIVACY_POLICY:
        return 'file-outline';
      case PROFILE_ACTION_BUTTONS_TYPES.LOGOUT:
        return 'logout';
      case PROFILE_ACTION_BUTTONS_TYPES.SETTINGS:
        return 'cogs';
      default:
        return null;
    }
  };

  const handlePress = type => {
    switch (type) {
      case PROFILE_ACTION_BUTTONS_TYPES.SETTINGS:
        // @ts-ignore
        navigation.navigate(NAV_ROUTES.SETTINGS_PROFILE);
        break;
      case PROFILE_ACTION_BUTTONS_TYPES.TERMS_AND_CONDITIONS:
        // @ts-ignore
        navigation.navigate(NAV_ROUTES.TERMS_AND_CONDITIONS);
        break;
      case PROFILE_ACTION_BUTTONS_TYPES.PRIVACY_POLICY:
        // @ts-ignore
        navigation.navigate(NAV_ROUTES.PRIVACY_POLICY);
        break;
      default:
        handleLogOut();
        break;
    }
  };

  const handleRenderIcon = (props, type) => {
    const icon = handleGetIcon(type);
    return (
      <List.Icon
        {...props}
        icon={icon}
        color={type === PROFILE_ACTION_BUTTONS_TYPES.LOGOUT ? COLORS.errorText : COLORS.brand}
      />
    );
  };

  const handleRenderRightIcon = (props, type) => {
    if (type !== PROFILE_ACTION_BUTTONS_TYPES.LOGOUT) {
      return (
        <List.Icon {...props} color={COLORS.brand} icon="chevron-right" />
      );
    }
    return null;
  };

  const handleRenderItem = ({ item }) => (
    <List.Item
      testID={item.type}
      title={t(item.key)}
      style={[
        styles.viewItem,
        item.type === PROFILE_ACTION_BUTTONS_TYPES.PRIVACY_POLICY && styles.faqViewItem,
        isDarkMode && styles.darkContainer,
      ]}
      titleStyle={styles.nameText}
      left={(props) => handleRenderIcon(props, item.type)}
      right={(props) => handleRenderRightIcon(props, item.type)}
      onPress={() => handlePress(item.type)}
    />
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={[styles.viewUserBlock, isDarkMode && styles.darkContainer]}>
        <UserImage style={styles.userImageView} size={70} imageStyle={styles.userImage} />
        <View>
          <Text testID={PROFILE_TEST_IDS.PROFILE_USERNAME} style={styles.username}>{user?.username}</Text>
        </View>
      </View>
      <FlatList
        testID={PROFILE_TEST_IDS.PROFILE_ITEMS_LIST}
        data={PROFILE_ACTION_BUTTONS}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

export default Profile;
