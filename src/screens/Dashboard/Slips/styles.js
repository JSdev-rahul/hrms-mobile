import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  leftIcon: {
    width: 30,
    height: 30,
    top: moderateVerticalScale(2),
  },
  rightIcon: {
    width: 20,
    height: 20,
    top: moderateVerticalScale(4),
  },
  container: {
    flex: 1,
  },
  listSection: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
});
export default styles;
