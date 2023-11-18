import { RenderResult } from '@testing-library/react-native';

import { CONTACTS_TESTS_IDS } from 'constants/testIds';

export default class ContactsComponent {
  component: RenderResult;

  constructor(component: RenderResult) {
    this.component = component;
  }

  async getUsersList() {
    const usersList = this.component.getByTestId(CONTACTS_TESTS_IDS.CONTACTS_LIST);
    return usersList.props.data;
  }

  async getUsersListEmptyText() {
    const emptyText = this.component.getByTestId(CONTACTS_TESTS_IDS.CONTACTS_EMPTY_TEXT);
    return emptyText.props.children;
  }

  async getUsersListItemAvatar(itemID: number) {
    const itemAvatar = this.component.getByTestId(`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_AVATAR}_${itemID}`);
    return itemAvatar.props.children.props.children;
  }

  async getUsersListItemUsername(itemID: number) {
    const itemUsername = this.component.getByTestId(`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_USERNAME}_${itemID}`);
    return itemUsername.props.children;
  }

  async getUsersListItemEmail(itemID: number) {
    const itemEmail = this.component.getByTestId(`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_EMAIL}_${itemID}`);
    return itemEmail.props.children;
  }

  async getUsersListItemOccupation(itemID: number) {
    const itemOccupation = this.component.getByTestId(`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_OCCUPATION}_${itemID}`);
    return itemOccupation.props.children;
  }
}
