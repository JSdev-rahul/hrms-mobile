import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  leftIcon: {
    width: 30,
    height: 30,
    top: moderateVerticalScale(2),
    tintColor:COLORS.PURPLE
  },
  rightIcon: {
    width: 20,
    height: 20,
    top: moderateVerticalScale(4),
    tintColor:COLORS.GREEN
  },
  container: {
    flex: 1,
  },
  listSection: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
  slipTitleStyle: {
    color: COLORS.BLACK, 
    paddingRight: moderateScale(20)
  },
});
export default styles;
