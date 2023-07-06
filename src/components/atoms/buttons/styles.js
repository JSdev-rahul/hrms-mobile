import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(48),
    backgroundColor: COLORS.PURPLE,
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: scale(14),
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
export default styles;
