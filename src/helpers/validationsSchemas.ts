/* eslint-disable */
import * as Yup from 'yup';
import i18next from 'i18next';

export const validationSchemaLogin= Yup.object().shape({
  email: Yup.string()
    .email(i18next.t('email_not_valid'))
    .required(i18next.t('email_required')),
  password: Yup.string()
    .min(8, i18next.t('password_validation'))
    .max(20, i18next.t('password_validation'))
    .required(i18next.t('password_required')),
  remember: Yup.boolean(),
});
