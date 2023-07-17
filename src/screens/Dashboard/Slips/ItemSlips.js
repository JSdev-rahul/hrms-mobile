import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import styles from './styles';

const ItemSlips = ({item}) => {
  return (
    <List.Item
      title={item.title}
      left={props => (
        <Image source={item.imageSource} {...props} style={styles.leftIcon} />
      )}
      right={props => (
        <TouchableOpacity>
          <Image
            source={item.rightImageSource}
            {...props}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default ItemSlips;
