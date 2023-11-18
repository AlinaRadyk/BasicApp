import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-native-paper';

import { COLORS, MODES } from 'constants/index';
import { SETTINGS_TESTS_IDS } from 'constants/testIds';

import { getMode } from 'modules/app/selectors';
import { setMode } from 'modules/app/actions';

const ChangeMode: FC = () => {
  const dispatch = useDispatch();

  const mode = useSelector(state => getMode(state));
  const isDarkMode = mode === MODES.DARK;

  const handleChangeMode = useCallback(() => {
    dispatch(setMode(isDarkMode ? MODES.LIGHT : MODES.DARK));
  }, [mode]);

  return (
    <Switch
      color={COLORS.brand}
      value={isDarkMode}
      onValueChange={handleChangeMode}
      testID={SETTINGS_TESTS_IDS.MODE_SWITCHER}
    />
  );
};

export default ChangeMode;
