import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {IMAGES, ROUTES} from '../../../constants';
import {styles} from './styles';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import {useNavigation} from '@react-navigation/native';
import {folderName} from '../../../constants/listData';

const Profile = () => {
  const navigation = useNavigation();
  const handleItemPress = item => {
    switch (item?.title) {
      case 'My Profile':
        navigation.navigate(ROUTES.MY_PROFILE);
        break;
      case 'Bank Details':
        navigation.navigate(ROUTES.BANK_DETAILS);
        break;
      case 'Slips':
        navigation.navigate(ROUTES.SLIPS);
        break;
      case 'About':
        navigation.navigate(ROUTES.ABOUT);
        break;
      default:
        break;
    }
  };
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
              <TouchableOpacity
                onPress={() => handleItemPress(item)}
                style={styles.listInnerContainer}>
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
            btnStyle={styles.buttonStyle}
            btnTextStyle={styles.buttonText}
            btnText={'Logout'}
            onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
