import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import { COLORS } from '../../../constants';
export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    flexDirection: 'row',
    bottom: moderateVerticalScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  childrenStyle: {
    marginEnd: moderateScale(4),
    fontWeight: '600',
  },
  imageStyle: {
    width: 22,
    height: 22,
    tintColor: COLORS.GREEN,
  },
});
