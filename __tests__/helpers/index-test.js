import * as Keychain from 'react-native-keychain';

import { isEmail, getEncryptionKey } from 'helpers/index';
import { validationSchemaLogin } from 'helpers/validationsSchemas';

describe('Helpers tests', () => {
  it('should return an existing key if it exists in Keychain', async () => {
    const existingKey = 'existingKey';
    Keychain.getGenericPassword.mockResolvedValue({ password: existingKey });

    const result = await getEncryptionKey();

    expect(result.isFresh).toBe(false);
    expect(result.key).toBe(existingKey);
  });

  it('should generate and return a new key if none exists in Keychain', async () => {
    const randomBytesString = 'randomBytesString';
    Keychain.getGenericPassword.mockResolvedValue(null);
    Keychain.setGenericPassword.mockResolvedValue(true);

    const result = await getEncryptionKey();

    expect(result.isFresh).toBe(true);
    expect(result.key).toBe(randomBytesString);
  });

  it('should return null if it fails to generate and set a new key', async () => {
    Keychain.getGenericPassword.mockResolvedValue(null);
    Keychain.setGenericPassword.mockResolvedValue(false);

    const result = await getEncryptionKey();

    expect(result.isFresh).toBe(false);
    expect(result.key).toBe(null);
  });

  it('should return true for a valid email', () => {
    const validEmail = 'example@example.com';

    const result = isEmail(validEmail);

    expect(result).toBe(true);
  });

  it('should return false for an email with missing "@"', () => {
    const invalidEmail = 'exampleexample.com';

    const result = isEmail(invalidEmail);

    expect(result).toBe(false);
  });

  it('should return false for an email with missing "."', () => {
    const invalidEmail = 'example@examplecom';

    const result = isEmail(invalidEmail);

    expect(result).toBe(false);
  });

  it('should return false for an empty string', () => {
    const emptyEmail = '';

    const result = isEmail(emptyEmail);

    expect(result).toBe(false);
  });

  it('should return false for a non-email string', () => {
    const nonEmail = 'This is not an email address';

    const result = isEmail(nonEmail);

    expect(result).toBe(false);
  });

  it('should validate a valid input', async () => {
    const validData = {
      email: 'test@example.com',
      password: 'password123',
      remember: true,
    };

    const isValid = await validationSchemaLogin.isValid(validData);

    expect(isValid).toBe(true);
  });

  it('should return error messages for invalid input', async () => {
    const invalidData = {
      email: 'invalid-email',
      password: 'short',
    };

    try {
      await validationSchemaLogin.validate(invalidData, { abortEarly: false });
    } catch (validationError) {
      expect(validationError.errors).toEqual([
        'email must be a valid email',
        'password must be at least 8 characters',
      ]);
    }
  });

  it('should return error messages for empty input', async () => {
    const emptyData = {
      email: '',
      password: '',
    };

    try {
      await validationSchemaLogin.validate(emptyData, { abortEarly: false });
    } catch (validationError) {
      expect(validationError.errors).toEqual([
        'email is a required field',
        'password must be at least 8 characters',
        'password is a required field',
      ]);
    }
  });
});
