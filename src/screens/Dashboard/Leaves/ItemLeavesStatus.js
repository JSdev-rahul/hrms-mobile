import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const ItemLeavesStatus = ({item}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          borderLeftWidth: 1,
          borderColor: COLORS.PURPLE,
          justifyContent: 'space-between',
          marginVertical: moderateVerticalScale(10),
          marginHorizontal: moderateScale(10),
          backgroundColor: COLORS.WHITE,
          borderRadius: moderateScale(5),
          padding: moderateScale(5),
        }}>
        <View
          style={{
            marginHorizontal: moderateScale(10),
          }}>
          <Text style={{fontWeight: 'bold'}}>{item.from}</Text>
          <Text style={{fontWeight: 'bold'}}>{item.to}</Text>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            marginHorizontal: moderateScale(10),
            fontWeight: 'bold',
          }}>
          {item.type}
        </Text>
        <Text
          style={{
            color: item.color,
            alignSelf: 'center',
            marginHorizontal: moderateScale(10),
          }}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemLeavesStatus;
