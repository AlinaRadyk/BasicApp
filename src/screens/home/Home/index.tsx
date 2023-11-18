import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Text } from 'react-native-paper';
import { View, FlatList } from 'react-native';

import Card from 'components/common/Card';

import { CONTACTS_TEST_IDS } from 'constants/testIds';
import { getInitials } from 'helpers/index';

import { getContacts } from 'modules/app/actions';
import { getContactsList } from 'modules/app/selectors';

import styles from 'screens/home/Home/style';

const Home: FC = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => getContactsList(state));

  const handleGetContacts = useCallback(() => {
    dispatch(getContacts());
  }, []);

  useEffect(() => {
    handleGetContacts();
  }, []);

  const handleRenderItem = ({ item }) => {
    const username = `${item.firstName} ${item.lastName}`;
    const label = getInitials(username);
    return (
      <Card customStyles={styles.listItem}>
        <View style={styles.viewContent}>
          <Avatar.Text style={styles.image} size={72} label={label} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{username}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <View style={styles.viewOccupation}>
              <Text style={styles.occupationText}>{item.occupation}</Text>
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
        renderItem={handleRenderItem}
        showsVerticalScrollIndicator={false}
        testID={CONTACTS_TEST_IDS.CONTACTS_ITEMS_LIST}
      />
    </View>
  );
};

export default Home;
