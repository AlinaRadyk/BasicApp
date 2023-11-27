import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { View, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

import Card from 'components/common/Card';

import { CAMERAS_TESTS_IDS } from 'constants/testIds';

import useForegroundHandler from 'hooks/useForegroundHandler';

import { getCameras } from 'modules/app/actions';
import { getCamerasList } from 'modules/app/selectors';

import styles from 'screens/home/Cameras/style';

const Cameras: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const cameras = useSelector(state => getCamerasList(state));

  const handleGetContacts = useCallback(() => {
    dispatch(getCameras());
  }, []);

  useForegroundHandler(handleGetContacts);

  useEffect(() => {
    handleGetContacts();
  }, []);

  const handleRenderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text testID={CAMERAS_TESTS_IDS.CAMERAS_EMPTY_TEXT} style={styles.emptyText}>
        {t('no_contacts')}
      </Text>
    </View>
  );

  const handleRenderItem = ({ item }) => (
    <Card customStyles={styles.listItem}>
      <View style={styles.viewContent}>
        <FastImage
          style={styles.image}
          source={{
            uri: item?.camera_url?.url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.userInfo}>
          <Text
            testID={`${CAMERAS_TESTS_IDS.CAMERA_LIST_ITEM_DESCRIPTION}_${item.id}`}
            style={styles.description}
          >
            {item?.camera_url?.description}
          </Text>
          <Text
            testID={`${CAMERAS_TESTS_IDS.CAMERA_LIST_ITEM_LOCATION}_${item.id}`}
            style={styles.location}
          >
            {item?.camera_location}
          </Text>
          <Text style={styles.coordinates} testID={`${CAMERAS_TESTS_IDS.CAMERA_LIST_ITEM_COORDINATES}_${item.id}`}>
            {`${t('coordinates')}: (${t('long')}: ${item?.point?.coordinates[0]}, ${t('lat')}: ${item?.point?.coordinates[1]})`}
          </Text>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cameras}
        contentContainerStyle={cameras.length === 0 ? { flex: 1 } : { flex: 0 }}
        renderItem={handleRenderItem}
        showsVerticalScrollIndicator={false}
        testID={CAMERAS_TESTS_IDS.CAMERAS_LIST}
        ListEmptyComponent={handleRenderEmpty}
      />
    </View>
  );
};

export default Cameras;
