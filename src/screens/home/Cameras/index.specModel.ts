import { RenderResult } from '@testing-library/react-native';

import { CAMERAS_TESTS_IDS } from 'constants/testIds';

export default class ContactsComponent {
  component: RenderResult;

  constructor(component: RenderResult) {
    this.component = component;
  }

  async getCamerasList() {
    const cameras = this.component.getByTestId(CAMERAS_TESTS_IDS.CAMERAS_LIST);
    return cameras.props.data;
  }

  async getCamerasListEmptyText() {
    const emptyText = this.component.getByTestId(CAMERAS_TESTS_IDS.CAMERAS_EMPTY_TEXT);
    return emptyText.props.children;
  }

  async getCameraListItemDescription(itemID: number) {
    const itemDescription = this.component.getByTestId(`${CAMERAS_TESTS_IDS.CAMERA_LIST_ITEM_DESCRIPTION}_${itemID}`);
    return itemDescription.props.children;
  }

  async getCameraListItemLocation(itemID: number) {
    const itemLocation = this.component.getByTestId(`${CAMERAS_TESTS_IDS.CAMERA_LIST_ITEM_LOCATION}_${itemID}`);
    return itemLocation.props.children;
  }

  async getCameraListItemCoordinates(itemID: number) {
    const itemCoordinates = this.component.getByTestId(`${CAMERAS_TESTS_IDS.CAMERA_LIST_ITEM_COORDINATES}_${itemID}`);
    return itemCoordinates.props.children;
  }
}
