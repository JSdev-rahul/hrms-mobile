import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../constants';
import styles from './styles';

const ItemNotification = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={IMAGES.notify}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.subTitleStyle}>{item.subTitle}</Text>
        </View>
        <Image source={IMAGES.arrow} style={styles.imageStyle} />
      </View>
    </View>
  );
};

export default ItemNotification;
