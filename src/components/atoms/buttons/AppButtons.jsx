import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AppButton = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  img,
  btnTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnStyle, ...btnStyle}}>
      {!!img ? (
        <Image style={{tintColor: colors.white}} source={img} />
      ) : (
        <Text style={{...styles.btnTextStyle,...btnTextStyle}}>{btnText}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
