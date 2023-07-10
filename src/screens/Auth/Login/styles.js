import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {DIMENSIONS} from '../../../utils/Dimensions';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eclipseOneStyle: {
    width: DIMENSIONS.WIDTH * 0.5,
    height: DIMENSIONS.HEIGHT * 0.5,
    bottom: 80,
    position: 'absolute',
    tintColor: COLORS.GREEN,
  },
  eclipseTwoStyle: {
    width: DIMENSIONS.WIDTH * 0.9,
    height: DIMENSIONS.HEIGHT * 0.5,
    bottom: DIMENSIONS.HEIGHT * 0.09,
    left: DIMENSIONS.WIDTH * 0.32,
    tintColor: COLORS.PURPLE,
    transform: [{rotate: '360deg'}],
  },
  hrmsTitle: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
    fontSize: scale(20),
    alignSelf: 'center',
  },
  hrmsSubTitle: {
    fontSize: scale(10),
    color: COLORS.WHITE,
    alignSelf: 'center',
  },
  hrmsLoginTitle: {
    fontSize: scale(16),
    color: COLORS.PURPLE,
    fontWeight: '500',
  },
  viewTitleStyle: {
    position: 'absolute',
    right: DIMENSIONS.WIDTH * 0.07,
    top: DIMENSIONS.HEIGHT * 0.099,
  },
  logoStyle: {
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 100,
  },
  santophyLogo: {
    width: '60%',
    height: 40,
  },
  loginContainer: {
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    marginHorizontal: 20,
    borderRadius: 5,
    bottom: DIMENSIONS.HEIGHT * 0.05,
    shadowOffset: {width: 0, height: 1},
    paddingBottom: DIMENSIONS.HEIGHT * 0.02,
  },
  loginStyle: {
    justifyContent: 'center',
    marginHorizontal: 18,
    top: 10,
  },
  inputStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom: 24,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  pwdContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom: 24,
    width: '88%',
  },
  forgetPwdStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 5,
    marginEnd: moderateScale(10),
  },
  pwdStyle: {
    fontSize: scale(12),
    color: COLORS.PURPLE,
    marginTop: moderateVerticalScale(5),
  },
});
export default styles;
