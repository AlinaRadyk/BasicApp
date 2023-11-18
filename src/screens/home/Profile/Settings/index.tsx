import React, { FC } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';

import ChangeMode from 'screens/home/Profile/Settings/ChangeMode';

import { COLORS, MODES } from 'constants/index';
import NAV_ROUTES from 'constants/routes';
import { SETTINGS_TESTS_IDS } from 'constants/testIds';

import { getMode } from 'modules/app/selectors';

import styles from 'screens/home/Profile/Settings/style';
import { Props } from 'screens/home/Profile/Settings/types';

const Settings: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const nav = navigation || useNavigation();

  const mode = useSelector(state => getMode(state));
  const isDarkMode = mode === MODES.DARK;

  const handleNavigateToLanguages = () => {
    // @ts-ignore
    nav.navigate(NAV_ROUTES.LANGUAGES);
  };

  const handleRenderIcon = (props) => (
    <List.Icon {...props} color={COLORS.brand} icon="chevron-right" />
  );

  const handleRenderSwitch = () => <ChangeMode />;

  return (
    <View style={styles.container} testID={SETTINGS_TESTS_IDS.SETTINGS_LIST}>
      <List.Item
        testID={SETTINGS_TESTS_IDS.LANGUAGE_LIST_ITEM}
        title={t('language')}
        titleStyle={styles.nameText}
        onPress={handleNavigateToLanguages}
        style={[styles.viewItem, isDarkMode && styles.darkContainer]}
        right={handleRenderIcon}
      />
      <List.Item
        testID={SETTINGS_TESTS_IDS.MODE_LIST_ITEM}
        title={isDarkMode ? t('dark_mode') : t('light_mode')}
        titleStyle={styles.nameText}
        style={[styles.viewItem, isDarkMode && styles.darkContainer]}
        right={handleRenderSwitch}
      />
    </View>
  );
};

export default Settings;
