import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {scale} from 'react-native-size-matters';
import TextInputTemplate from '../../../components/templates/TextInputTemplate';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import styles from './styles';

const MyProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <HeaderAtom
        title="My Profile"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.myProfileContainer}>
            <Image source={IMAGES.proIcon} style={styles.proIcon} />
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={IMAGES.pencil}
                style={styles.pencilIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.titleName}>John Doe</Text>
            <Text style={styles.titleDesignation}>React Native Developer</Text>
          </View>
        </View>
        <View style={styles.viewStyle}>
          <TextInputTemplate
            secureTextEntry={true}
            label={'Location'}
            placeholder={'Indore'}
            style={{
              fontSize: scale(12),
              marginHorizontal: moderateScale(10),
            }}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInputTemplate
            secureTextEntry={true}
            label={'Phone Number'}
            placeholder={'+91 9123243334'}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInputTemplate
            secureTextEntry={true}
            label={'Email Id'}
            placeholder={'himanshusinha.santophy@gmail.com'}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInputTemplate
            secureTextEntry={true}
            label={'Date Of Birth'}
            placeholder={'11/10/2000'}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInputTemplate
            secureTextEntry={true}
            label={'Date Of Joining'}
            placeholder={'11/10/2000'}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInputTemplate
            secureTextEntry={true}
            label={'Address'}
            placeholder={'Indore'}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.viewStyle}>
          <TextInputTemplate
            secureTextEntry={true}
            label={'ZipCode'}
            placeholder={'452006'}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            btnStyle={{
              backgroundColor: COLORS.GREEN,
              color: COLORS.WHITE,
              width: moderateScale(200),
            }}
            btnTextStyle={{color: COLORS.WHITE}}
            btnText={'Submit'}
            onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyProfile;
