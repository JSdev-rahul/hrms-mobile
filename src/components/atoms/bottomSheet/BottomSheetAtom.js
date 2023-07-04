import React, {useRef, useCallback, useMemo, useEffect} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import BottomSheet, {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Icons} from '../../../constants/listData';
import {COLORS, ROUTES} from '../../../constants';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {styles} from './styles';

function BottomSheetAtom() {
  const bottomSheetRef = useRef(0);
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['15%', '20%'], []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleItemPress = item => {
    switch (item.title) {
      case 'Home':
        navigation.navigate(ROUTES.HOME_SCREEN);
        break;
      case 'Profile':
        navigation.navigate(ROUTES.PROFILE);
        break;
      default:
        break;
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // return () => bottomSheetRef.current.close();
    }, []),
  );

  const renderItem = ({item}) => {
    console.log(item, '..........item');
    return (
      <View>
        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width / 4.4,
            marginHorizontal: 20,
            marginTop: 1,
            height: Dimensions.get('window').height / 18,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleItemPress(item)}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              borderWidth: 1,
              padding: 10,
              backgroundColor: COLORS.PURPLE,
            }}>
            <Image
              style={{height: 25, width: 25, tintColor: COLORS.WHITE}}
              source={item.icon}
            />
            {/* <Text style={{ color: COLORS.WHITE }}>{item.title}</Text> */}
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
