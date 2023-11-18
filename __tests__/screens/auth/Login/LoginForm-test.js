import React from 'react';
import { render } from '@testing-library/react-native';

import { ERROR } from 'constants/index';
import { getEncryptionKey } from 'helpers/index';

import LogInForm from 'screens/auth/Login/LogInForm';
import LoginFormComponent from 'screens/auth/Login/LogInForm/index.specModel';

import { setUser } from 'modules/auth/actions';
import { setError, setAlertVisible } from 'modules/app/actions';

import { configureStore } from 'config/store';

const getStore = async () => {
  const encryptionKey = await getEncryptionKey();
  return configureStore(encryptionKey).store;
};

let store;

describe('Login form', () => {
  beforeEach(async () => {
    store = await getStore();
    jest.useFakeTimers();
  });

  it('Form successful behaviour', async () => {
    const email = 'semenukha@yahoo.com';
    const password = 'Qwerty123$';
    const remember = false;
    const mockOnSubmit = jest.fn();
    const mockOnNavigate = jest.fn();

    const component = new LoginFormComponent(render(
      <LogInForm
        email=""
        password=""
        isDarkMode
        remember={remember}
        onNavigateForgotPassword={mockOnNavigate}
        onSubmit={mockOnSubmit}
      />,
    ));

    await component.enterEmail(email);
    await component.enterPassword(password);
    await component.pressRememberMe();
    await component.submitForm();

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({ email, password, remember: true }, expect.anything());
  });

  it('Has validation errors', async () => {
    const email = 'alina.radyk';
    const password = 'Qwer';
    const remember = false;
    const mockOnSubmit = jest.fn();
    const mockOnNavigate = jest.fn();

    const component = new LoginFormComponent(render(
      <LogInForm
        email=""
        password=""
        isDarkMode
        remember={remember}
        onNavigateForgotPassword={mockOnNavigate}
        onSubmit={mockOnSubmit}
      />,
    ));

    await component.enterEmail(email);
    await component.enterPassword(password);
    await component.pressRememberMe();
    await component.submitForm();
    const errorTextEmail = await component.getEmailValidationError();
    const errorTextPassword = await component.getPasswordValidationError();

    expect(errorTextEmail).toBe('email must be a valid email');
    expect(errorTextPassword).toBe('password must be at least 8 characters');
    expect(mockOnSubmit).toHaveBeenCalledTimes(0);
  });

  it('Failure login', async () => {
    const email = 'semenukha@yahoo.com';
    const password = 'Qwerty13$';
    const remember = false;
    const mockOnSubmit = jest.fn();
    const mockOnNavigate = jest.fn();

    const component = new LoginFormComponent(render(
      <LogInForm
        isDarkMode
        email={email}
        password={password}
        remember={remember}
        onNavigateForgotPassword={mockOnNavigate}
        onSubmit={mockOnSubmit}
      />,
    ));

    await component.pressRememberMe();
    await component.submitForm();
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({ email, password, remember: true }, expect.anything());

    store.dispatch(setError(ERROR));
    store.dispatch(setAlertVisible(true));
    const state = store.getState();

    expect(state.auth.user).toEqual(null);
    expect(state.app.error).toEqual(ERROR.error);
    expect(state.app.errorText).toEqual(ERROR.errorText);
  });

  it('Successful login', async () => {
    const email = 'semenukha@yahoo.com';
    const password = 'Qwerty123$';
    const remember = false;
    const mockOnSubmit = jest.fn();
    const mockOnNavigate = jest.fn();

    const component = new LoginFormComponent(render(
      <LogInForm
        isDarkMode
        email={email}
        password={password}
        remember={remember}
        onNavigateForgotPassword={mockOnNavigate}
        onSubmit={mockOnSubmit}
      />,
    ));

    await component.pressRememberMe();
    await component.submitForm();

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({ email, password, remember: true }, expect.anything());

    store.dispatch(setUser({ email, username: email }));
    const state = store.getState();

    expect(state.auth.user.username).toEqual(email);
    expect(state.auth.user.email).toEqual(email);
  });
});
