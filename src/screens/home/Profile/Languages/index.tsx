import React, { FC, useCallback } from 'react';
import { List } from 'react-native-paper';
import { View, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import i18n from 'i18n';

import { MODES, LANGUAGES, COLORS } from 'constants/index';
import { LANGUAGES_TESTS_IDS } from 'constants/testIds';

import { getMode, getLanguage } from 'modules/app/selectors';
import { setLanguage } from 'modules/app/actions';

import styles from 'screens/home/Profile/Languages/style';

const Languages: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const mode = useSelector(state => getMode(state));
  const language = useSelector(state => getLanguage(state));
  const isDarkMode = mode === MODES.DARK;

  const handleChangeLanguages = useCallback(async (code) => {
    await i18n.changeLanguage(code);
    dispatch(setLanguage(code));
  }, []);

  const handleRenderIcon = useCallback((props, code) => {
    if (code === language) {
      return (
        <List.Icon {...props} color={COLORS.brand} icon="check" />
      );
    }
    return null;
  }, [language]);

  const handleRenderItem = ({ item }) => (
    <List.Item
      title={t(item.name)}
      titleStyle={styles.nameText}
      onPress={() => handleChangeLanguages(item.code)}
      right={(props) => handleRenderIcon(props, item.code)}
      style={[styles.viewItem, isDarkMode && styles.darkContainer]}
      testID={`${LANGUAGES_TESTS_IDS.LANGUAGES_LIST_ITEM}_${item.key}`}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={LANGUAGES}
        renderItem={handleRenderItem}
        testID={LANGUAGES_TESTS_IDS.LANGUAGES_LIST}
      />
    </View>
  );
};

export default Languages;
