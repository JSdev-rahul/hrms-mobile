import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  innerContainer: {
    width: Dimensions.get('window').width / 4.4,
    marginHorizontal: 20,
    marginTop: 1,
    height: Dimensions.get('window').height / 18,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: COLORS.GREEN,
    borderWidth: 2,
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },
  iconStyle: {
    height: 25,
    width: 25,
    tintColor: COLORS.GREEN,
  },
});
