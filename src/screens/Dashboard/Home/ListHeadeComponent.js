import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import styles from './styles';

const ListHeadeComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 20,
      }}>
      <Text style={styles.titleWeek}>This Week</Text>
      <Text style={styles.titleWeekTime}>8 h 14 m / 40 hrs</Text>
    </View>
  );
};

export default ListHeadeComponent;
