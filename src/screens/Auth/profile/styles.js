import {StyleSheet} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';

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
});
