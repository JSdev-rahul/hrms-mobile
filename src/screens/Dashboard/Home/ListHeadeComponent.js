import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';

const ListHeadeComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 20,
      }}>
      <Text style={{fontWeight: 'bold', color: COLORS.BLACK}}>This Week</Text>
      <Text style={{fontWeight: 'bold', color: COLORS.BLACK}}>
        8 h 14 m / 40 hrs
      </Text>
    </View>
  );
};

export default ListHeadeComponent;
