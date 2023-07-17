import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
const styles = StyleSheet.create({
  headerListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 5,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
  },
  headerImageContainer: {
    paddingHorizontal: 4,
  },
  headerImageStyle: {
    width: 20,
    height: 20,
    marginStart: 5,
    alignSelf: 'center',
    tintColor:COLORS.GREEN
  },
  headerTitleStyle: {
    marginStart: 10,
    flex: 1,
    alignSelf: 'center',
    color: COLORS.PRIMARY_BLACK,
    fontSize: 14,
  },
  headerSearchContainer: {
    justifyContent: 'center',
  },
  imageSearchStyle: {
    width: 23,
    height: 23,
    alignSelf: 'center',
    tintColor:COLORS.GREEN
  },
  skipTextStyle: {
    marginHorizontal: 5,
    alignSelf: 'center',
    fontSize: 12,
    color: COLORS.GREEN,
  },
  skipContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});
export default styles;
