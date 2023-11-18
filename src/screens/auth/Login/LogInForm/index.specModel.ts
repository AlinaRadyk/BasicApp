import { fireEvent, RenderResult, act } from '@testing-library/react-native';

import { TESTS_IDS_LOGIN } from 'constants/testIds';

export default class LoginFormComponent {
  component: RenderResult;

  constructor(component: RenderResult) {
    this.component = component;
  }

  async enterEmail(email: string) {
    const emailInput = this.component.getByTestId(TESTS_IDS_LOGIN.TEST_ID_EMAIL_INPUT);
    await act(async () => {
      await fireEvent.changeText(emailInput, email);
    });
  }

  async getEmailValidationError() {
    const errorTextEmail = this.component.getByTestId(TESTS_IDS_LOGIN.TEST_ID_VALIDATION_ERROR_EMAIL);
    return errorTextEmail.props.children;
  }

  async enterPassword(password: string) {
    const passwordInput = this.component.getByTestId(TESTS_IDS_LOGIN.TEST_ID_PASSWORD_INPUT);
    await act(async () => {
      await fireEvent.changeText(passwordInput, password);
    });
  }

  async getPasswordValidationError() {
    const errorTextPassword = this.component.getByTestId(TESTS_IDS_LOGIN.TEST_ID_VALIDATION_ERROR_PASS);
    return errorTextPassword.props.children;
  }

async pressRememberMe() {
    const checkboxRemember = this.component.getByTestId(TESTS_IDS_LOGIN.TEST_ID_REMEMBER);
    await act(async () => {
      await fireEvent.press(checkboxRemember);
    });
  }

  async submitForm() {
    const button = this.component.getByTestId(TESTS_IDS_LOGIN.TEST_ID_SUBMIT_BUTTON);
    await act(async () => {
      await fireEvent.press(button);
    });
  }
}
