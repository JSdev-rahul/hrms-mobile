import {Image, Pressable, Text} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../constants';

const AppButton = ({
  btnText,
  style,
  onPress = () => {},
  img,
  btnTextStyle = {},
  Ripple,
}) => {
  return (
    <Pressable
      android_ripple={Ripple}
      activeOpacity={0.8}
      onPress={onPress}
      style={style}>
      {!!img ? (
        <Image style={{tintColor: colors.white}} source={img} />
      ) : (
        <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
      )}
    </Pressable>
  );
};

export default AppButton;
