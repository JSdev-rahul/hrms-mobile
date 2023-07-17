import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../constants';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

function RadioButton({children, selectedOption, setSelectedOption}) {
  return (
    <View style={styles.rootContainer}>
      <View
        style={{
          flexDirection: 'row',
          bottom: moderateVerticalScale(25),
          alignItems: 'center',
          justifyContent: 'center',
          margin: 3,
        }}>
        <Text style={{marginEnd: moderateScale(4), fontWeight: '600'}}>
          {children}
        </Text>
        <Ionicons
          name={
            selectedOption == children ? 'radio-button-on' : 'radio-button-off'
          }
          size={24}
          color={COLORS.GREEN}
          onPress={() => {
            setSelectedOption(children);
          }}
        />
      </View>
    </View>
  );
}

export default RadioButton;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
