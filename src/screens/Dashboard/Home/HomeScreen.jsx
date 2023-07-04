import React from 'react';
import {View, Text} from 'react-native';
import BottomSheetAtom from '../../../components/atoms/bottomSheet/BottomSheetAtom';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {IMAGES} from '../../../constants';

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <HeaderAtom title="Home" imageRightArrow={IMAGES.notify} />
      <BottomSheetAtom />
    </View>
  );
}
export default HomeScreen;
