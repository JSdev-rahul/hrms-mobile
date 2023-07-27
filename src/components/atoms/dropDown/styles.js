import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    top: moderateScale(5),
    fontWeight: 'bold',
  },
  dropDownStyle: {
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    minHeight: 42,
    backgroundColor: COLORS.WHITE,
    borderWidth: 0.5,
    borderColor: COLORS.BLACK,
  },
  nameTextStyle: {
    padding: 10,
    borderWidth: 0.3,
    borderColor: '#cfcfcf',
  },
  nameText: {
    fontWeight: '500',
  },
});
