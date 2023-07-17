import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES, ROUTES} from '../../../constants';
import {leaves, leavesStatus} from '../../../constants/listData';
import ItemLeaves from './ItemLeaves';
import {useNavigation} from '@react-navigation/native';
import ItemLeavesStatus from './ItemLeavesStatus';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import {moderateScale} from 'react-native-size-matters';

const Leaves = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation();

  const handleCategoryPress = item => {
    setSelectedCategory(prevCategory => {
      if (prevCategory === item.id) {
        return '';
      }
      return item.id;
    });
  };

  let filteredList = leavesStatus.filter(
    item => item.status_id === selectedCategory,
  );
  if (selectedCategory === '') {
    filteredList = leavesStatus;
  }
  return (
    <View style={{flex: 1}}>
      <HeaderAtom
        title="Leaves"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
      />
      <View>
        <FlatList
          horizontal
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.WHITE,
            width: '95%',
            marginHorizontal: 10,
          }}
          showsHorizontalScrollIndicator={false}
          data={leaves}
          renderItem={({item}) => (
            <ItemLeaves
              item={item}
              isSelected={selectedCategory === item.id}
              onPress={() => handleCategoryPress(item)}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FlatList
          data={filteredList}
          renderItem={({item}) => <ItemLeavesStatus item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: moderateScale(30),
          width: '100%',
        }}>
        <AppButton
          btnStyle={{
            backgroundColor: COLORS.GREEN,
            color: COLORS.WHITE,
          }}
          btnTextStyle={{color: COLORS.WHITE}}
          btnText={'Leave Request'}
          onPress={() => navigation.navigate(ROUTES.LEAVE_REQUEST)}
        />
      </View>
    </View>
  );
};

export default Leaves;
