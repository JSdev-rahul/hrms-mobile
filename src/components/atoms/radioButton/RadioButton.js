import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../../constants';
import {styles} from './styles';

function RadioButton({children, selectedOption, setSelectedOption}) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.textStyle}>
        <Text style={styles.childrenStyle}>{children}</Text>
        <TouchableOpacity onPress={() => setSelectedOption(children)}>
          <Image
            style={styles.imageStyle}
            source={
              selectedOption == children
                ? IMAGES.radio_selected
                : IMAGES.radio_unselected
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RadioButton;
