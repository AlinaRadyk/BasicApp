import React, { memo } from 'react';
import { View } from 'react-native';
import { Field, FieldProps } from 'formik';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CheckboxInput from 'components/common/CheckboxInput';
import ActionButton from 'components/common/Button';
import Input from 'components/common/TextInput';
import Form from 'components/common/Form';

import { IS_IPHONE_X } from 'constants/index';
import { TESTS_IDS_LOGIN } from 'constants/testIds';

import { validationSchemaLogin } from 'helpers/validationsSchemas';

import styles from 'screens/auth/Login/LogInForm/style';
import { Props } from 'screens/auth/Login/LogInForm/types';

const LogInForm: React.FC<Props> = ({
  email,
  password,
  remember = false,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <Form
      onSubmit={onSubmit}
      formStyle={styles.viewFormBlock}
      validationSchema={validationSchemaLogin}
      initialValues={{
        email,
        password,
        remember,
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <View style={[styles.formView, { marginBottom: IS_IPHONE_X ? insets.bottom : 30 }]}>
          <View>
            <Input
              testID={TESTS_IDS_LOGIN.TEST_ID_EMAIL_INPUT}
              errorTestId={TESTS_IDS_LOGIN.TEST_ID_VALIDATION_ERROR_EMAIL}
              icon="account-outline"
              name="email"
              placeholder={t('email')}
              values={values}
              keyboardType="email-address"
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Input
              testID={TESTS_IDS_LOGIN.TEST_ID_PASSWORD_INPUT}
              errorTestId={TESTS_IDS_LOGIN.TEST_ID_VALIDATION_ERROR_PASS}
              isPassword
              icon="lock-outline"
              name="password"
              placeholder={t('password')}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <View style={styles.row}>
              <Field value={values.remember} name="remember">
                {({
                    field,
                    form: { setFieldValue },
                  }: FieldProps) => (
                    <CheckboxInput
                      testID={TESTS_IDS_LOGIN.TEST_ID_REMEMBER}
                      customStyles={styles.checkBox}
                      checked={values.remember}
                      onChange={() => setFieldValue(field.name, !values.remember)}
                      title={t('remember_me')}
                    />
                )}
              </Field>
            </View>
          </View>
          <ActionButton
            testID={TESTS_IDS_LOGIN.TEST_ID_SUBMIT_BUTTON}
            disabled={values.email?.length === 0 || values.password.length === 0 || Boolean(errors.email) || Boolean(errors.password)}
            title={t('login')}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Form>
  );
};

export default memo(LogInForm);
