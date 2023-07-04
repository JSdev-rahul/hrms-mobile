import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {COLORS, IMAGES, ROUTES} from '../../constants';
import styles from './styles';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? COLORS.GREY : COLORS.BLACK;

  return (
    <View
      style={{
        width: 6,
        height: 6,
        backgroundColor,
        marginHorizontal: 3,
        borderRadius: 3,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.viewStyle} {...props}>
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.GREEN,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={IMAGES.arrow}
        style={{
          width: 25,
          height: 25,
          tintColor: COLORS.WHITE,
          transform: [{rotate: '180deg'}],
        }}
      />
    </View>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.viewStyle} {...props}>
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.GREEN,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={IMAGES.arrow}
        style={{width: 25, height: 25, tintColor: COLORS.WHITE}}
      />
    </View>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.viewStyle} {...props}>
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.GREEN,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={IMAGES.arrow}
        style={{width: 25, height: 25, tintColor: COLORS.WHITE}}
      />
    </View>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        bottomBarHighlight={false}
        onSkip={() => navigation.replace(ROUTES.LOGIN)}
        onDone={() => navigation.navigate(ROUTES.LOGIN)}
        pages={[
          {
            image: (
              <Image
                resizeMode="contain"
                source={IMAGES.onBoarding_1}
                style={{width: 300, height: 300}}
              />
            ),
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
            titleStyles: {color: COLORS.BLACK},
            subTitleStyles: {color: COLORS.GREY},
          },

          {
            image: (
              <Image
                resizeMode="contain"
                source={IMAGES.onBoarding_2}
                style={{width: 300, height: 300}}
              />
            ),
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
            titleStyles: {color: COLORS.BLACK},
            subTitleStyles: {color: COLORS.GREY},
          },
          {
            image: (
              <Image
                resizeMode="contain"
                source={IMAGES.onBoarding_3}
                style={{width: 300, height: 300}}
              />
            ),
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
            titleStyles: {color: COLORS.BLACK},
            subTitleStyles: {color: COLORS.GREY},
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
