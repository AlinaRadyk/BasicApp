import { fireEvent, RenderResult, act } from '@testing-library/react-native';

import { PROFILE_ACTION_BUTTONS_TYPES } from 'constants/index';
import { PROFILE_TEST_IDS } from 'screens/home/Profile/index';

export default class ProfileComponent {
  component: RenderResult;

  constructor(component: RenderResult) {
    this.component = component;
  }

  async getProfileItemsList() {
    const profileItemsList = this.component.getByTestId(PROFILE_TEST_IDS.PROFILE_ITEMS_LIST);
    return profileItemsList.props.data;
  }

  async getProfileUsername() {
    const profileUsername = this.component.getByTestId(PROFILE_TEST_IDS.PROFILE_USERNAME);
    return profileUsername.props.children;
  }

  async logoutPress() {
    const logoutButton = this.component.getByTestId(PROFILE_ACTION_BUTTONS_TYPES.LOGOUT);
    await act(async () => {
      await fireEvent.press(logoutButton);
    });
  }
}
