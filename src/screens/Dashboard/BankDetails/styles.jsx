import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  titleStyle: {
    height: 60,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical:10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.GREEN,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.GREY,
  },
});
