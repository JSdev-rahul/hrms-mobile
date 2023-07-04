import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import { scale } from 'react-native-size-matters';
const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    paddingStart: 12,
    fontSize:scale(12)
  },
  outLineStyles: {
    borderRadius: 8,
    borderWidth: 0.5,
    
  },
  underLineStyle: {
    borderRadius: 8,
    borderWidth: 0.5,
  },
});
export default styles;
