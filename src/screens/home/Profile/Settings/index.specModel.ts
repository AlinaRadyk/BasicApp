import { fireEvent, RenderResult, act } from '@testing-library/react-native';

import { SETTINGS_TESTS_IDS } from 'constants/testIds';

export default class SettingsComponent {
  component: RenderResult;

  constructor(component: RenderResult) {
    this.component = component;
  }

  async getSettingsList() {
    const settingsList = this.component.getByTestId(SETTINGS_TESTS_IDS.SETTINGS_LIST);
    return settingsList.props.children;
  }

  async switchMode() {
    const modeSwitcher = this.component.getByTestId(SETTINGS_TESTS_IDS.MODE_SWITCHER);
    await act(async () => {
      await fireEvent(modeSwitcher, 'onValueChange');
    });
  }

  async changeRadius(radius: number) {
    const radiusInput = await this.component.getByTestId(SETTINGS_TESTS_IDS.MARKER_RADIUS_INPUT);
    await act(async () => {
      await fireEvent.changeText(radiusInput, radius.toString());
      await fireEvent(radiusInput, 'onEndEditing');
    });
  }
}
