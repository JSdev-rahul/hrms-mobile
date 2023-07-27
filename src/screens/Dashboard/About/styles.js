import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {COLORS} from '../../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  listSection: {
    marginHorizontal: moderateScale(10),
  },
  emailStyle: {
    color: COLORS.BLACK,
    paddingRight: moderateScale(20),
    marginVertical: 10,
  },
  emailTitle: {
    paddingRight: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetingImage: {
    width: 350,
    height: 350,
  },
  listAccordion:{
    color: COLORS.BLACK,
    paddingRight: moderateScale(20),
    marginVertical: 10,
  },
  termConditon: {
    color: COLORS.BLACK,
    paddingRight: moderateScale(20),
    marginVertical: 10,
  },
  titleStyle: {
    paddingRight: 30,
  },
  versionStyle: {
    paddingBottom: 10,
  },
  versionTextStyle:{
    textAlign: 'center', 
    color: COLORS.GREEN,
    fontSize:scale(12)
  }
});
export default styles;
