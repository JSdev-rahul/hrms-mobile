import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import BottomSheetAtom from '../../../components/atoms/bottomSheet/BottomSheetAtom';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import ItemStatus from './ItemStatus';
import {timeStatus, weekStatus} from '../../../constants/listData';
import ItemWeekStatus from './ItemWeekStatus';
import ListHeadeComponent from './ListHeadeComponent';
function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <HeaderAtom title="Home" imageRightArrow={IMAGES.notify} />
      <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
        <View
          style={{
            borderRadius: 50,
            borderWidth: 0.5,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 40, width: 40, tintColor: COLORS.GREEN}}
            source={IMAGES.user}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 500, color: COLORS.BLACK}}>
            Welcome,Adarsh Raj
          </Text>
          <Text style={{fontSize: 12, color: COLORS.BLACK}}>
            React Native Developer
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={timeStatus}
          renderItem={({item, index}) => (
            <ItemStatus item={item} index={index} />
          )}
        />
      </View>
      <View>
        <FlatList
          ListHeaderComponent={ListHeadeComponent}
          data={weekStatus}
          contentContainerStyle={{
            backgroundColor: COLORS.WHITE,
            marginHorizontal: 20,
            borderRadius: 20,
            marginTop: 10,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ItemWeekStatus item={item} />}
        />
      </View>
      <BottomSheetAtom />
    </View>
  );
}
export default HomeScreen;
