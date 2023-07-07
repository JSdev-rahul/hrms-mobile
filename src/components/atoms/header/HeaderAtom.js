import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../../constants';
const HeaderAtom = ({imageBack, title, imageRightArrow, onPress, onSkip}) => {
  return (
    <View style={{...styles.headerListContainer}}>
      <TouchableOpacity onPress={onPress} style={styles.headerImageContainer}>
        <Image style={styles.headerImageStyle} source={imageBack} />
      </TouchableOpacity>

      <Text
        style={{
          textAlign: 'center',
          fontSize: scale(18),
          fontWeight: 'bold',
          color: COLORS.GREEN,
        }}>
        {title}
      </Text>
      <TouchableOpacity onPressIn={onSkip} style={styles.headerSearchContainer}>
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
