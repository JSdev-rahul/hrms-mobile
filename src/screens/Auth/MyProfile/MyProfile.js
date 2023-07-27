import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Formik} from 'formik';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import TextInputTemplate from '../../../components/templates/TextInputTemplate';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validationSchema} from '../../../constants/formikValidation';

const MyProfile = () => {
  const [initialValues, setInitaialValue] = useState({
    email: '',
    dob: '',
    doj: '',
    mobile_number: '',
    address: '',
    zipCode: '',
  });
  const navigation = useNavigation();
  const handleFormSubmit = value => {
    console.log(value);
    // navigation.navigate(ROUTES.HOME_SCREEN);
  };
  return (
    <View style={styles.mainContainer}>
      <HeaderAtom
        title="My Profile"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={values => handleFormSubmit(values)}>
          {({values, handleChange, errors, handleSubmit, handleBlur}) => (
            <View>
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
                  <Text style={styles.titleName}>Adarsh Raj Patel</Text>
                  <Text style={styles.titleDesignation}>
                    React Native Developer
                  </Text>
                </View>
              </View>
              <View style={styles.viewStyle}>
                <TextInputTemplate
                  secureTextEntry={true}
                  label={'Email Id'}
                  placeholder={'Please Enter Email'}
                  style={styles.inputStyle}
                  value={values?.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                />
                {errors?.email ? (
                  <Text style={styles.errorStyle}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={styles.viewStyle}>
                <TextInputTemplate
                  secureTextEntry={true}
                  label={'Date Of Birth'}
                  placeholder={'Enter Date Of Birth'}
                  style={styles.inputStyle}
                  value={values?.dob}
                  onChangeText={handleChange('dob')}
                  onBlur={() => handleBlur('dob')}
                />
              </View>
              {errors?.dob ? (
                <Text style={styles.errorStyle}>{errors.dob}</Text>
              ) : null}
              <View style={styles.viewStyle}>
                <TextInputTemplate
                  secureTextEntry={true}
                  label={'Date Of Joining'}
                  placeholder={'Enter Date Of Joining'}
                  style={styles.inputStyle}
                  value={values?.doj}
                  onChangeText={handleChange('doj')}
                  onBlur={() => handleBlur('doj')}
                />
              </View>
              {errors?.doj ? (
                <Text style={styles.errorStyle}>{errors.doj}</Text>
              ) : null}
              <View style={styles.viewStyle}>
                <TextInputTemplate
                  secureTextEntry={true}
                  label={'Mobile Number'}
                  placeholder={'Enter Mobile Number'}
                  style={styles.inputStyle}
                  value={values?.mobile_number}
                  onChangeText={handleChange('mobile_number')}
                  onBlur={() => handleBlur('mobile_number')}
                />
              </View>
              {errors?.mobile_number ? (
                <Text style={styles.errorStyle}>{errors.mobile_number}</Text>
              ) : null}
              <View style={styles.viewStyle}>
                <TextInputTemplate
                  secureTextEntry={true}
                  label={'Address'}
                  placeholder={'Enter Your Address'}
                  style={styles.inputStyle}
                  value={values?.address}
                  onChangeText={handleChange('address')}
                  onBlur={() => handleBlur('address')}
                />
              </View>
              {errors?.address ? (
                <Text style={styles.errorStyle}>{errors.address}</Text>
              ) : null}
              <View style={styles.viewStyle}>
                <TextInputTemplate
                  secureTextEntry={true}
                  label={'ZipCode'}
                  placeholder={'452006'}
                  style={styles.inputStyle}
                  value={values?.zipCode}
                  onChangeText={handleChange('zipCode')}
                  onBlur={() => handleBlur('zipCode')}
                />
              </View>
              {errors?.zipCode ? (
                <Text style={styles.errorStyle}>{errors.zipCode}</Text>
              ) : null}
              <View style={styles.buttonContainer}>
                <AppButton
                  btnStyle={styles.buttonStyle}
                  btnTextStyle={{color: COLORS.WHITE}}
                  btnText={'Submit'}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default MyProfile;
