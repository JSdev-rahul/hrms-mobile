import {StyleSheet} from 'react-native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: 10,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileStyle: {
    borderRadius: 50,
    borderWidth: 1,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(15),
  },
  profileImage: {
    height: 70,
    width: 70,
    tintColor: COLORS.GREEN,
  },
  nameContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  empName: {
    fontSize: 18,
    color: COLORS.GREEN,
  },
  role: {
    fontSize: 14,
    color: COLORS.GREEN,
  },
  listContainer: {
    marginTop: 30,
  },
  listInnerContainer: {
    marginTop: 15,
  },
  listInnerStyle: {
    height: 60,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 16,
    height: 16,
    tintColor: COLORS.GREEN,
  },
  titleStyle: {
    fontSize: scale(14),
    color: COLORS.GREEN,
    marginStart: 10,
  },
  arrowIconStyle: {
    height: 20,
    width: 20,
    tintColor: COLORS.GREEN,
    fontWeight: 500,
  },
  btnContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoutBtn: {
    rippleColor: COLORS.PURPLE,
    backgroundColor: COLORS.GREEN,
    color: COLORS.WHITE,
    height: 40,
    width: '50%',
  },
  btnText: {
    color: COLORS.WHITE,
  },
});
