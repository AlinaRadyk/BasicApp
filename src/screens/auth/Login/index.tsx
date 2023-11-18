import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Keychain from 'react-native-keychain';

import { isEmail } from 'helpers/index';

import AuthFormContainer from 'components/common/AuthFormContainer';
import LogInForm from 'screens/auth/Login/LogInForm';

import { loginUser } from 'modules/auth/actions';
import { appInit } from 'modules/app/actions';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const checkUserStatus = useCallback(async () => {
    try {
      dispatch(appInit());
      const credentials = await Keychain.getGenericPassword();
      if (credentials && isEmail(credentials?.username)) {
        setEmail(credentials.username);
      }
    } catch (error) {
      console.log('Keychain couldn\'t be accessed!', error);
    }
  }, []);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const handleLogIn = useCallback(async (values) => {
    if (values.remember) {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        await Keychain.setGenericPassword(values.email, credentials?.password);
      }
    }
    dispatch(loginUser(values));
  }, []);

  return (
    <AuthFormContainer>
      <LogInForm
        email={email}
        password=""
        onSubmit={handleLogIn}
      />
    </AuthFormContainer>
  );
}

export default Login;
