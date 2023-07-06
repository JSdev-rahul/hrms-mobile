import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {ProgressBar} from 'react-native-paper';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import {moderateVerticalScale} from 'react-native-size-matters';

const ItemStatus = ({item, index}) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 15,
        height: Dimensions.get('window').height / 3.5,
        width: Dimensions.get('window').width / 1.1,
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }}>
      <View
        style={{
          backgroundColor: index % 2 == 0 ? COLORS.GREEN : COLORS.PURPLE,
          height: 55,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'center',
          paddingStart: 15,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.WHITE}}>
          {item.day}
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: COLORS.BLACK}}>
          {item.time}
        </Text>
        <View style={{width: 300, marginTop: 20, alignSelf: 'center'}}>
          <ProgressBar progress={0.2} color={COLORS.GREEN} />
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            color: COLORS.BLACK,
            fontSize: 14,
          }}>
          Shift Timeing 10:00 AM TO 6:00 PM
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateVerticalScale(25),
          }}>
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
