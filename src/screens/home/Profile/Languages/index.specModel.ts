import { fireEvent, RenderResult, act } from '@testing-library/react-native';

import { LANGUAGES_TESTS_IDS } from 'constants/testIds';

export default class LanguagesComponent {
  component: RenderResult;

  constructor(component: RenderResult) {
    this.component = component;
  }

  async getLanguagesList() {
    const languagesList = this.component.getByTestId(LANGUAGES_TESTS_IDS.LANGUAGES_LIST);
    return languagesList.props.data;
  }

  async pressLanguage(languageId: number) {
    const languageItem = this.component.getByTestId(`LANGUAGES_LIST_ITEM_${languageId}`);
    await act(async () => {
      await fireEvent.press(languageItem);
    });
  }
}
