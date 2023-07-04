import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../utils/Dimensions';
import {COLORS} from '../../constants';
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
});

export default styles;
