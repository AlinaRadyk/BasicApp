import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { getUser } from 'modules/auth/selectors';

import NAV_ROUTES from 'constants/routes';

import styles from 'components/common/UserImage/style';
import { Props } from 'components/common/UserImage/types';

const UserImage: FC<Props> = ({
  size,
  style,
  imageStyle,
  user,
}) => {
  const navigation = useNavigation();

  const currentUser = useSelector(state => getUser(state));
  const image = null;
  const u = user || currentUser;
  const label = u?.username?.match(/(\b\S)?/g).join('').match(/(^\S|\S$)?/g).join('')
    .toUpperCase();

  const handleNavigateToProfile = () => {
    // @ts-ignore
    navigation.navigate(NAV_ROUTES.PROFILE);
  };
  return (
    <TouchableRipple onPress={handleNavigateToProfile} style={[styles.container, style]}>
      {Boolean(image) ? (
        <Avatar.Image style={[styles.image, imageStyle]} size={size} source={{ uri: '' }} />
      ) : (
        <Avatar.Text
          style={[styles.image, imageStyle]}
          size={size}
          label={label}
        />
      )}
    </TouchableRipple>
  );
};

export default UserImage;
