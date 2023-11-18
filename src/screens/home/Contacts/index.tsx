import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { View, FlatList } from 'react-native';

import Card from 'components/common/Card';

import { CONTACTS_TESTS_IDS } from 'constants/testIds';
import { getInitials } from 'helpers/index';

import { getContacts } from 'modules/app/actions';
import { getContactsList } from 'modules/app/selectors';

import styles from 'screens/home/Contacts/style';

const Contacts: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const contacts = useSelector(state => getContactsList(state));

  const handleGetContacts = useCallback(() => {
    dispatch(getContacts());
  }, []);

  useEffect(() => {
    handleGetContacts();
  }, []);

  const handleRenderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text testID={CONTACTS_TESTS_IDS.CONTACTS_EMPTY_TEXT} style={styles.emptyText}>
        {t('no_contacts')}
      </Text>
    </View>
  );

  const handleRenderItem = ({ item }) => {
    const username = `${item.firstName} ${item.lastName}`;
    const label = getInitials(username);
    return (
      <Card customStyles={styles.listItem}>
        <View style={styles.viewContent}>
          <Avatar.Text
            testID={`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_AVATAR}_${item.id}`}
            style={styles.image}
            label={label}
            size={72}
          />
          <View style={styles.userInfo}>
            <Text
              testID={`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_USERNAME}_${item.id}`}
              style={styles.userName}
            >
              {username}
            </Text>
            <Text style={styles.email} testID={`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_EMAIL}_${item.id}`}>
              {item.email}
            </Text>
            <View style={styles.viewOccupation}>
              <Text
                testID={`${CONTACTS_TESTS_IDS.CONTACTS_LIST_ITEM_OCCUPATION}_${item.id}`}
                style={styles.occupationText}
              >
                {item.occupation}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        contentContainerStyle={contacts.length === 0 ? { flex: 1 } : { flex: 0 }}
        renderItem={handleRenderItem}
        showsVerticalScrollIndicator={false}
        testID={CONTACTS_TESTS_IDS.CONTACTS_LIST}
        ListEmptyComponent={handleRenderEmpty}
      />
    </View>
  );
};

export default Contacts;
