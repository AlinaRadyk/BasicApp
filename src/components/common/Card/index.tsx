import React, { FC } from 'react';
import { Card } from 'react-native-paper';

import BackButton from 'components/common/BackButton';

import styles from 'components/common/Card/style';
import { Props } from 'components/common/Card/types';

const CardItem: FC<Props> = ({
 title,
 withBackButton,
 children,
 onBackPress,
 customStyles,
 contentStyles,
 backButtonTestId,
}) => {
 const handleRenderLeft = () => (
   <BackButton testID={backButtonTestId} onPress={onBackPress} />
 );

 return (
   <Card style={[styles.container, customStyles]}>
     {Boolean(title) && (
       <Card.Title
         title={title}
         left={withBackButton ? handleRenderLeft : undefined}
         style={styles.viewTittle}
         titleStyle={[styles.title, !withBackButton && { width: '100%' }]}
       />
     )}
     <Card.Content style={[styles.content, contentStyles]}>{children}</Card.Content>
   </Card>
 );
};

export default CardItem;
