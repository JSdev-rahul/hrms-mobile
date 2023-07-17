import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {COLORS} from '../../../constants';

const ItemLeaves = ({item, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.selectedListItem,
        {
          backgroundColor: isSelected ? COLORS.GREEN : COLORS.WHITE,
        },
      ]}>
      <Text style={isSelected ? styles.itemSelectedText : styles.itemSelected}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemLeaves;
