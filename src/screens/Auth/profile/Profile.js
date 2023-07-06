import {View, Text, Image} from 'react-native';
import React from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {styles} from './styles';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Profile = () => {
  return (
    <View style={styles.container}>
      <HeaderAtom title="Profile" imageBack={IMAGES.backArrow} />
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          <View
            style={styles.profileStyle}>
            <Image
              style={{height: 70, width: 70, tintColor: COLORS.GREEN}}
              source={IMAGES.user}
            />
          </View>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 500, color: COLORS.BLACK}}>
              Adarsh Raj Patel
            </Text>
            <Text style={{fontSize:14,color:COLORS.BLACK}}>React Native Developer</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
