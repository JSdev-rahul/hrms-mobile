import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {IMAGES} from '../../../constants';
import {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {styles} from './styles';
const DropDown = ({data = [], value = null, onSelect = () => {}, label}) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleOptionPress = option => {
    onSelect(option);
    setShowOptions(false);
  };
  return (
    <View>
      <Text
        style={styles.labelStyle}>
        {label}
      </Text>

      <TouchableOpacity
        onPress={() => setShowOptions(!showOptions)}
        activeOpacity={0.8}
        style={styles.dropDownStyle}>
        <Text style={styles.nameStyle}>
          {value ? value.name : 'Choose an option'}
        </Text>

        <Image
          style={{
            width: 20,
            height: 20,
            transform: [{rotate: showOptions ? '180deg' : '0deg'}],
          }}
          source={IMAGES.dropDown}
        />
      </TouchableOpacity>
      <View style={{marginHorizontal: moderateScale(10)}}>
        {showOptions && (
          <View>
            {data.map((val, i) => {
              return (
                <TouchableOpacity
                  key={String(i)}
                  onPress={() => handleOptionPress(val)}
                  style={styles.nameTextStyle}>
                  <Text style={styles.nameText}>{val.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

 

export default DropDown;
