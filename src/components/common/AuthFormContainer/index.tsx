import React, { FC } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IS_IOS } from 'constants/index';
import { User } from 'assets/svg';

import { Props } from 'components/common/AuthFormContainer/types';
import styles from 'components/common/AuthFormContainer/style';

const AuthFormContainer: FC<Props> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={IS_IOS ? 'padding' : 'height'}
      style={[styles.container, { paddingBottom: insets.bottom, paddingTop: insets.top }]}
    >
      <View style={styles.viewLogo}>
        <User />
      </View>
      <View style={styles.viewForm}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthFormContainer;
