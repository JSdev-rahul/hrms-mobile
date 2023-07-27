import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../../constants';
import {scale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(5),
    backgroundColor: 'red',
    paddingVertical: moderateVerticalScale(30),
    marginHorizontal: moderateScale(10),
    backgroundColor: COLORS.WHITE,
    borderRadius: moderateScale(10),
  },
  myProfileContainer: {
    borderColor: COLORS.GREEN,
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proIcon: {
    width: moderateScale(70),
    height: moderateScale(70),
    tintColor: COLORS.GREEN,
  },
  pencilIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: COLORS.GREEN,
    position: 'absolute',
    left: moderateScale(34),
    bottom: moderateScale(2),
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
  },
  locationInput: {
    fontSize: scale(12),
    marginHorizontal: moderateScale(10),
  },
  nameContainer: {
    marginTop: moderateVerticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleName: {
    fontWeight: 'bold',
    color: COLORS.GREEN,
    fontSize: scale(16),
  },
  titleDesignation: {
    fontWeight: '400',
    color: COLORS.GREEN,
    fontSize: scale(14),
  },
  viewStyle: {
    marginTop: moderateVerticalScale(10),
  },
  inputStyle: {
    fontSize: scale(12),
    marginHorizontal: moderateScale(10),
  },
  buttonContainer: {
    marginTop: moderateVerticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateVerticalScale(10),
  },
  buttonStyle: {
    backgroundColor: COLORS.GREEN,
    color: COLORS.WHITE,
    width: moderateScale(200),
  },
  errorStyle: {
    color: 'red',
    marginLeft: 10,
    fontSize: 12,
  },
});
export default styles;
