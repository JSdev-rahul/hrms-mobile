import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../utils/Dimensions';
import {COLORS} from '../../constants';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    width: DIMENSIONS.WIDTH,
    backgroundColor: COLORS.WHITE,
  },
  viewStyle: {
    marginHorizontal: 30,
  },
  dot: {
    width: 6,
    height: 6,
    marginHorizontal: 3,
    borderRadius: 10,
  },
  skip: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipArrow: {
    width: 25,
    height: 25,
    tintColor: COLORS.WHITE,
    transform: [{rotate: '180deg'}],
  },
  next: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextImage: {
    width: 25,
    height: 25,
    tintColor: COLORS.WHITE,
  },
  done: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onBoarding: {
    width: scale(350),
    height: verticalScale(350),
  },
});

export default styles;
