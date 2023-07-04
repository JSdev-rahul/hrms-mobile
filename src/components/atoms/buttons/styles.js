import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {COLORS} from '../../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PURPLE,
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(12),
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: scale(14),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default styles;
