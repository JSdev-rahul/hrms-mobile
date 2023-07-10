import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {moderateScale, scale} from 'react-native-size-matters';
import {moderateVerticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {flex: 1},
  cardHeader: {
    marginHorizontal: 20,
    marginTop: 15,
    height: Dimensions.get('window').height / 3.5,
    width: Dimensions.get('window').width / 1.1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnStyle: {
    color: COLORS.BLACK,
    height: 40,
    width: '100%',
  },
  btnTextStyle: {color: COLORS.GREEN},
  titleTime: {
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.BLACK,
    fontSize: scale(12),
  },
  titleShift: {
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '600',
    marginTop: moderateVerticalScale(10),
  },
  cardInner: {
    height: 55,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    paddingStart: 15,
  },
  titleContainer: {
    marginTop: 20,
  },
  viewProgressBar: {
    width: 300,
    marginTop: 20,
    alignSelf: 'center',
  },
  titleTime: {
    textAlign: 'center',
    fontSize: scale(16),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  userContainer: {
    borderRadius: 50,
    borderWidth: 0.5,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  userImage: {
    height: 40,
    width: 40,
    tintColor: COLORS.GREEN,
  },
  listStyle: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  userTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.BLACK,
  },
  userSubTitle: {
    fontSize: 12,
    color: COLORS.BLACK,
  },
  titleDay: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(25),
  },
  weekContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  weekInnerContainer: {
    flexDirection: 'row',
  },
  titleWeekDay: {
    margin: moderateScale(10),
    fontWeight: 'bold',
    backgroundColor: COLORS.LIGHT_GREY,
    padding: 10,
    borderRadius: 10,
    color: COLORS.BLACK,
  },
  weekContainerStyle: {
    flex: 1,
    marginEnd: 10,
    justifyContent: 'center',
  },
  weekInnerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  weekTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    borderRadius: 10,
    color: COLORS.BLACK,
  },
  weekTime: {
    fontWeight: 'bold',
    alignSelf: 'center',
    borderRadius: 10,
    color: COLORS.BLACK,
  },
  weekTimeContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleFrom: {
    fontWeight: '500',
    alignSelf: 'center',
    borderRadius: 10,
  },
  progressView: {
    width: 100,
    alignSelf: 'center',
  },
  titleTo: {
    fontWeight: '500',
    alignSelf: 'center',
    borderRadius: 10,
  },
  titleWeek: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  titleWeekTime: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
export default styles;
