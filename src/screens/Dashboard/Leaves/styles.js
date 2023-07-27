import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
const styles = StyleSheet.create({
  leaveContainer: {flex: 1},
  selectedListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: moderateScale(10),
    borderRadius: moderateScale(10),
    marginVertical: moderateVerticalScale(6),
    height: 40,
    borderWidth: 0.7,
    fontSize: 10,
    paddingHorizontal: moderateScale(15),
    marginEnd: moderateScale(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSelected: {
    color: COLORS.BLACK,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.WHITE,
  },
  itemSelectedText: {
    fontSize: 14,
    color: COLORS.WHITE,
  },
  DatePicker: {
    position: 'absolute',
    bottom: scale(7),
    right: scale(18),
    borderRadius: 10,
    width: 20,
    height: 20,
  },
  dateImage: {
    height: 20,
    width: 35,
    tintColor: COLORS.BLACK,
  },
  itemLeave: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    width: '95%',
    marginHorizontal: 10,
  },
  leaveButton: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: moderateScale(30),
    width: '100%',
  },
  leaveBtn: {
    backgroundColor: COLORS.GREEN,
    color: COLORS.WHITE,
  },
  reqContainer: {flex: 1},
  radioButton: {
    marginTop: 40,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateStyle: {
    fontWeight: '600',
    bottom: 30,
    marginHorizontal: moderateScale(8),
  },
  datePickerContainer: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    borderWidth: 0.5,
    borderColor: COLORS.BLACK,
    bottom: moderateScale(20),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  date: {
    justifyContent: 'center',
    top: 10,
    marginStart: 10,
  },
  dateText: {
    fontWeight: '600',
  },
  absanceContainer: {
    marginHorizontal: 10,
  },
  absanceText: {
    fontWeight: '600',
    bottom: moderateScale(10),
  },
  inputStyle: {
    fontSize: scale(12),
    height: 100,
    bottom: moderateScale(10),
  },
  selectBtn: {
    backgroundColor: COLORS.GREY_LIGHT,
    color: COLORS.WHITE,
  },
  selectButton: {
    color: COLORS.BLACK,
    fontWeight: '600',
    marginHorizontal: 5,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: moderateScale(10),
    width: '100%',
  },
  sendButton: {
    backgroundColor: COLORS.GREEN,
    color: COLORS.WHITE,
  },
  leaveStatusContainer: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderColor: COLORS.PURPLE,
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(10),
    marginHorizontal: moderateScale(10),
    backgroundColor: COLORS.WHITE,
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
  },
  textContainer: {
    marginHorizontal: moderateScale(10),
  },
  fromStyle: {fontWeight: 'bold'},
  typeStyle: {
    alignSelf: 'center',
    marginHorizontal: moderateScale(10),
    fontWeight: 'bold',
  },
  statusStyle: {
    alignSelf: 'center',
    marginHorizontal: moderateScale(10),
  },
});
export default styles;
