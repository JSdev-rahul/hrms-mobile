import React, {useRef, useCallback, useMemo, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Icons} from '../../../constants/listData';
import {ROUTES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

function BottomSheetAtom() {
  const bottomSheetRef = useRef(0);
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['18%', '60%'], []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleItemPress = item => {
    switch (item.title) {
      case 'Home':
        navigation.navigate(ROUTES.HOME_SCREEN);
        break;
      case 'Leaves':
        navigation.navigate(ROUTES.LEAVES);
        break;
      case 'Profile':
        navigation.navigate(ROUTES.PROFILE);
        break;
      default:
        break;
    }
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => handleItemPress(item)}>
          <View
            style={styles.imageStyle}>
            <Image
              style={styles.iconStyle}
              source={item.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Icons}
            renderItem={renderItem}
            numColumns={3}
          />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

export default BottomSheetAtom;
