import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  
  btnTextStyle: {
    fontSize: scale(14),
    color: COLORS.GREEN,
    fontWeight: 'bold',
  },
});
export default styles;
