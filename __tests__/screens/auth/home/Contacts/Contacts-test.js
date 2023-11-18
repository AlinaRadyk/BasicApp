import React from 'react';
import { render } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';

import Contacts from 'screens/home/Contacts';
import ContactsComponent from 'screens/home/Contacts/index.specModel';

import { USERS } from 'constants/index';
import { getEncryptionKey, getInitials } from 'helpers/index';

import { setContacts } from 'modules/app/actions';

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

    store.dispatch(setContacts([]));
  });

  it('It renders empty state of the list of contacts', async () => {
    const component = new ContactsComponent(render(
      <Contacts />,
    ));

    const users = await component.getUsersList();
    expect(users.length).toEqual(0);

    const emptyText = await component.getUsersListEmptyText();
    expect(emptyText).toBe('no_contacts');
  });

  it('It renders list of contacts', async () => {
    store.dispatch(setContacts(USERS));
    const component = new ContactsComponent(render(
      <Contacts />,
    ));

    const users = await component.getUsersList();
    expect(users.length).toEqual(USERS.length);
    expect(store.getState().app.contacts.length).toEqual(USERS.length);

    await users.reduce(async (promise, user, idx) => {
      await promise;

      const currentUsername = `${USERS[idx].firstName} ${USERS[idx].lastName}`;

      const userAvatar = await component.getUsersListItemAvatar(user.id);
      const initials = getInitials(currentUsername);
      expect(userAvatar).toBe(initials);

      const username = await component.getUsersListItemUsername(user.id);
      expect(username).toBe(currentUsername);

      const email = await component.getUsersListItemEmail(user.id);
      expect(email).toBe(USERS[idx].email);

      const occupation = await component.getUsersListItemOccupation(user.id);
      expect(occupation).toBe(USERS[idx].occupation);
    }, Promise.resolve());
  });
});
