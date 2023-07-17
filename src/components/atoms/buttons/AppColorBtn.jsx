import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../constants';

const AppColorBtn = ({
  btnText,
  btnColorStyle = {},
  onPress = () => {},
  img,
  label,
  btnColorTextStyle = {},
}) => {
  return (
    <>
      <Text style={{marginStart: 10, bottom: 5, fontWeight: '600'}}>
        {label}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{...styles.btnColorStyle, ...btnColorStyle}}>
        {!!img ? (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20, marginHorizontal: 10}}
              source={img}
            />
            <Text style={{...styles.btnColorTextStyle, ...btnColorTextStyle}}>
              {btnText}
            </Text>
          </View>
        ) : (
          <Text style={{...styles.btnColorTextStyle, ...btnColorTextStyle}}>
            {btnText}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default AppColorBtn;
