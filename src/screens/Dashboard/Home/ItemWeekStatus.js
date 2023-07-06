import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {ProgressBar} from 'react-native-paper';

const ItemWeekStatus = ({item}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            margin: moderateScale(10),
            fontWeight: 'bold',
            backgroundColor: COLORS.LIGHT_GREY,
            padding: 10,
            borderRadius: 10,
            color: COLORS.BLACK,
          }}>
          {item.day}
        </Text>

        <View style={{flex: 1, marginEnd: 10, justifyContent: 'center'}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                alignSelf: 'center',
                borderRadius: 10,
                color: COLORS.BLACK,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                alignSelf: 'center',
                borderRadius: 10,
                color: COLORS.BLACK,
              }}>
              {item.time}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontWeight: 500,
                alignSelf: 'center',
                borderRadius: 10,
              }}>
              {item.from}
            </Text>
            <View style={{width: 100, alignSelf: 'center'}}>
              <ProgressBar progress={0.2} color={COLORS.GREEN} />
            </View>
            <Text
              style={{
                fontWeight: 500,
                alignSelf: 'center',
                borderRadius: 10,
              }}>
              {item.to}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemWeekStatus;
