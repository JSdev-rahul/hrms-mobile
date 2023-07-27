import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {ProgressBar} from 'react-native-paper';
import styles from './styles';

const ItemWeekStatus = ({item}) => {
  return (
    <View style={styles.weekContainer}>
      <View style={styles.weekInnerContainer}>
        <Text style={styles.titleWeekDay}>{item.day}</Text>
        <View style={styles.weekContainerStyle}>
          <View style={styles.weekInnerStyle}>
            <Text style={styles.weekTitle}>{item.title}</Text>
            <Text style={styles.weekTime}>{item.time}</Text>
          </View>
          <View style={styles.weekTimeContainer}>
            <Text style={styles.titleFrom}>{item.from}</Text>
            <View style={styles.progressView}>
              <ProgressBar progress={0.6} color={COLORS.GREEN} />
            </View>
            <Text style={styles.titleTo}>{item.to}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemWeekStatus;
