import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import styles from './styles';

const ItemLeavesStatus = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.leaveStatusContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.fromStyle}>{item.from}</Text>
          <Text style={styles.fromStyle}>{item.to}</Text>
        </View>
        <Text style={styles.typeStyle}>{item.type}</Text>
        <Text
          style={{
            ...styles.statusStyle,
            color: item.color,
          }}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemLeavesStatus;
