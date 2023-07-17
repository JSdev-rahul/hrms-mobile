import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS, IMAGES} from '../../../constants';
import {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';

const DropDown = ({data = [], value = null, onSelect = () => {}, label}) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleOptionPress = option => {
    onSelect(option);
    setShowOptions(false);
  };

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          marginHorizontal: 10,
          top: moderateScale(5),
          fontWeight: 'bold',
        }}>
        {label}
      </Text>

      <TouchableOpacity
        onPress={() => setShowOptions(!showOptions)}
        activeOpacity={0.8}
        style={styles.dropDownStyle}>
        <Text style={{fontWeight: '600'}}>
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
                  style={{
                    padding: 10,
                    borderWidth: 0.3,
                    borderColor: '#cfcfcf',
                  }}>
                  <Text style={{fontWeight: '500'}}>{val.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownStyle: {
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    minHeight: 42,
    backgroundColor: COLORS.WHITE,

    borderWidth: 0.5,
    borderColor: COLORS.BLACK,
  },
});

export default DropDown;
