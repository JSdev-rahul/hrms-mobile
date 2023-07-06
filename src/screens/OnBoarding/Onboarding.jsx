import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {COLORS, IMAGES, ROUTES} from '../../constants';
import styles from './styles';

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? COLORS.GREY : COLORS.GREEN;
  return <View style={[styles.dot, {backgroundColor}]} />;
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.viewStyle} {...props}>
    <View style={styles.skip}>
      <Image source={IMAGES.arrow} style={styles.skipArrow} />
    </View>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.viewStyle} {...props}>
    <View style={styles.next}>
      <Image source={IMAGES.arrow} style={styles.nextImage} />
    </View>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.viewStyle} {...props}>
    <View style={styles.done}>
      <Image source={IMAGES.arrow} style={styles.nextImage} />
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
            title: 'Connect to the World',
            image: (
              <Image
                resizeMode="contain"
                source={IMAGES.onBoarding_1}
                style={styles.onBoarding}
              />
            ),

            subtitle: 'A New Way To Connect With The World',
            titleStyles: {color: COLORS.GREEN},
            subTitleStyles: {color: COLORS.PURPLE},
          },

          {
            image: (
              <Image
                resizeMode="contain"
                source={IMAGES.onBoarding_2}
                style={styles.onBoarding}
              />
            ),
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
            titleStyles: {color: COLORS.GREEN},
            subTitleStyles: {color: COLORS.PURPLE},
          },
          {
            image: (
              <Image
                resizeMode="contain"
                source={IMAGES.onBoarding_3}
                style={styles.onBoarding}
              />
            ),
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
            titleStyles: {color: COLORS.GREEN},
            subTitleStyles: {color: COLORS.PURPLE},
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
