import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {ProgressBar} from 'react-native-paper';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import styless from './styles';
import styles from './styles';
const ItemStatus = ({item, index}) => {
  return (
    <View style={styless.cardHeader}>
      <View
        style={[
          styless.cardInner,
          {backgroundColor: index % 2 == 0 ? COLORS.GREEN : COLORS.PURPLE},
        ]}>
        <Text style={styles.titleDay}>{item.day}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTime}>{item.time}</Text>
        <View style={styles.viewProgressBar}>
          <ProgressBar progress={0.2} color={COLORS.GREEN} />
        </View>
        <Text style={styles.titleShift}>Shift Timing 10:00 AM TO 6:00 PM</Text>
        <View style={styles.buttonContainer}>
          <AppButton
            btnStyle={{
              backgroundColor: item.backgroundColor,
              color: COLORS.WHITE,
              height: 40,
              width: '50%',
            }}
            btnTextStyle={{color: COLORS.WHITE}}
            btnText={item.status}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemStatus;
