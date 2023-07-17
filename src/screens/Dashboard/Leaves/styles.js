import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
const styles = StyleSheet.create({
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
});
export default styles;
