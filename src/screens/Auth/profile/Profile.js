import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {IMAGES} from '../../../constants';
import {styles} from './styles';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import {useNavigation} from '@react-navigation/native';
import {folderName} from '../../../constants/listData';

const Profile = () => {
  const navigation = useNavigation();
  const [isPress,setIsPress]=useState(false)

  return (
    <View style={styles.container}>
      <HeaderAtom
        title="Profile"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileStyle}>
            <Image style={styles.profileImage} source={IMAGES.user} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.empName}>Adarsh Raj Patel</Text>
            <Text style={styles.role}>React Native Developer</Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          {folderName.map(item => {
            return (
              <TouchableOpacity style={styles.listInnerContainer}>
                <View style={styles.listInnerStyle}>
                  <View style={styles.imageStyle}>
                    <Image style={styles.iconStyle} source={item.Icon} />
                    <Text style={styles.titleStyle}>{item.title}</Text>
                  </View>
                  <View>
                    <Image style={styles.arrowIconStyle} source={item.image} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            style={!isPress?styles.logoutBtn1:styles.logoutBtn2}
            btnTextStyle={!isPress?styles.btnText1:styles.btnText2}
            btnText={'Logout'}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
