import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react-native';

import { MODES } from 'constants/index';
import { SETTINGS_TESTS_IDS } from 'constants/testIds';
import { getEncryptionKey } from 'helpers/index';

import Settings from 'screens/home/Profile/Settings';
import SettingsComponent from 'screens/home/Profile/Settings/index.specModel';

import { configureStore } from 'config/store';

const getStore = async () => {
  const encryptionKey = await getEncryptionKey();
  return configureStore(encryptionKey).store;
};

let store;

describe('Settings', () => {
  beforeEach(async () => {
    store = await getStore();
    jest.useFakeTimers();
    useSelector.mockImplementation(callback => {
      return callback(store.getState());
    });
    useDispatch.mockReturnValue(store.dispatch);
  });

  it('Has two elements', async () => {
    const component = new SettingsComponent(render(
      <Settings />,
    ));

    const list = await component.getSettingsList();
    expect(list.length).toBe(2);
    expect(list[0].props.testID).toBe(SETTINGS_TESTS_IDS.LANGUAGE_LIST_ITEM);
    expect(list[1].props.testID).toBe(SETTINGS_TESTS_IDS.MODE_LIST_ITEM);
  });

  it('Mode is switching', async () => {
    const component = new SettingsComponent(render(
      <Settings />,
    ));

    expect(store.getState().app.mode).toBe(MODES.LIGHT);
    await component.switchMode();
    expect(store.getState().app.mode).toBe(MODES.DARK);
  });
});
