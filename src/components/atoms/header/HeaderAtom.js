import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const HeaderAtom = ({
  imageBack,
  title,
  imageRightArrow,
  onPress,
  onPressIn,
}) => {
  return (
    <View style={{...styles.headerListContainer}}>
      <TouchableOpacity onPress={onPress} style={styles.headerImageContainer}>
        <Image style={styles.headerImageStyle} source={imageBack} />
      </TouchableOpacity>

      <Text style={styles.titleStyle}>{title}</Text>
      <TouchableOpacity
        onPressIn={onPressIn}
        style={styles.headerSearchContainer}>
        <View style={styles.skipContainer}>
          <Image
            resizeMode={'contain'}
            style={styles.imageSearchStyle}
            source={imageRightArrow}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderAtom;
