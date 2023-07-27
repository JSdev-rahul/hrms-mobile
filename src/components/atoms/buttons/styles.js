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
    width: '90%',
  },
  btnTextStyle: {
    fontSize: scale(14),
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  btnColorStyle: {
    height: moderateScale(48),
    backgroundColor: COLORS.GREY,
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnColorTextStyle: {
    fontSize: scale(14),
    color: COLORS.WHITE,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  labelStyle: {
    marginStart: 10,
    bottom: 5,
    fontWeight: '600',
  },
});
export default styles;
