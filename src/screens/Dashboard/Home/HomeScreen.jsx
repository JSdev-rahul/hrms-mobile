import React from 'react';
import {View, Text, Image} from 'react-native';
import BottomSheetAtom from '../../../components/atoms/bottomSheet/BottomSheetAtom';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {ProgressBar, Colors} from 'react-native-paper';
import AppButton from '../../../components/atoms/buttons/AppButtons';

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
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 15,
          height: 250,
          backgroundColor: COLORS.WHITE,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <View
          style={{
            backgroundColor: COLORS.GREEN,
            height: 55,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: 'center',
            paddingStart: 15,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.WHITE}}>
            6 Feb, Friday
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{textAlign: 'center', fontSize: 20, color: COLORS.BLACK}}>
            00 : 00 : 00 Hrs
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
              marginTop: 10,
            }}>
            <AppButton
              btnStyle={{
                backgroundColor: 'green',
                color: COLORS.WHITE,
                height: 40,
                width: '50%',
              }}
              btnTextStyle={{color: COLORS.WHITE}}
              btnText={'Check in'}
            />
          </View>
        </View>
      </View>
      <BottomSheetAtom />
    </View>
  );
}
export default HomeScreen;
