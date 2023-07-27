import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ListHeadeComponent = () => {
  return (
    <View
      style={styles.listHeaderContainer}>
      <Text style={styles.titleWeek}>This Week</Text>
      <Text style={styles.titleWeekTime}>8 h 14 m / 40 hrs</Text>
    </View>
  );
};

export default ListHeadeComponent;
