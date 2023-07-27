import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {moderateScale, scale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    padding: moderateScale(20),
  },
  imageContainer: {
    backgroundColor: COLORS.PURPLE,
    borderRadius: moderateScale(20),
    width: moderateScale(40),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    elevation: 3,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    tintColor: COLORS.WHITE,
  },
  titleStyle: {
    marginHorizontal: moderateScale(10),
    fontWeight: 'bold',
    color: COLORS.GREEN,
    fontSize: scale(14),
  },
  subTitleStyle: {
    marginHorizontal: moderateScale(10),
    fontWeight: '400',
    fontSize: scale(12),
  },
  innerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default styles;
