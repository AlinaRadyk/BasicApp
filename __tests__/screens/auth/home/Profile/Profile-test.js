import React from 'react';
import { render } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';

import Profile from 'screens/home/Profile';
import ProfileComponent from 'screens/home/Profile/index.specModel';

import { PROFILE_ACTION_BUTTONS } from 'constants/index';
import { getEncryptionKey } from 'helpers/index';

import { setUser } from 'modules/auth/actions';

import { configureStore } from 'config/store';

const getStore = async () => {
  const encryptionKey = await getEncryptionKey();
  return configureStore(encryptionKey).store;
};

let store;

const email = 'semenukha@yahoo.com';

describe('Profile tests', () => {
  beforeEach(async () => {
    store = await getStore();
    useSelector.mockImplementation(callback => {
      return callback(store.getState());
    });
    useDispatch.mockReturnValue(store.dispatch);

    store.dispatch(setUser({ username: email, email }));
  });

  it('It renders profile correctly', async () => {
    const component = new ProfileComponent(render(
      <Profile />,
    ));

    const list = await component.getProfileItemsList();
    expect(list.length).toBe(PROFILE_ACTION_BUTTONS.length);
    const screensUsername = await component.getProfileUsername();
    expect(screensUsername).toBe(email);
  });

  it('It logs user out', async () => {
    const component = new ProfileComponent(render(
      <Profile />,
    ));

    await component.logoutPress();
    expect(store.getState().auth.user).toBe(null);
  });
});
