import React from 'react';
import { render } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';

import Languages from 'screens/home/Profile/Languages';
import LanguagesComponent from 'screens/home/Profile/Languages/index.specModel';

import { LANGUAGES } from 'constants/index';
import { getEncryptionKey } from 'helpers/index';

import { configureStore } from 'config/store';

const getStore = async () => {
  const encryptionKey = await getEncryptionKey();
  return configureStore(encryptionKey).store;
};

let store;

describe('Languages settings', () => {
  beforeEach(async () => {
    store = await getStore();
    useSelector.mockImplementation(callback => {
      return callback(store.getState());
    });
    useDispatch.mockReturnValue(store.dispatch);
  });

  it('It renders list of languages', async () => {
    const component = new LanguagesComponent(render(
      <Languages />,
    ));

    const languages = await component.getLanguagesList();
    expect(languages.length).toEqual(LANGUAGES.length);
    expect(store.getState().app.language).toBe('en');
  });

  it('It changes language to english', async () => {
    const component = new LanguagesComponent(render(
      <Languages />,
    ));

    const languages = await component.getLanguagesList();
    await component.pressLanguage(languages[1]?.key);
    expect(store.getState().app.language).toBe('es');
    await component.pressLanguage(languages[0]?.key);
    expect(store.getState().app.language).toBe('en');
  });
});
