import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES, ROUTES} from '../../../constants';
import {leaves, leavesStatus} from '../../../constants/listData';
import ItemLeaves from './ItemLeaves';
import {useNavigation} from '@react-navigation/native';
import ItemLeavesStatus from './ItemLeavesStatus';
import AppButton from '../../../components/atoms/buttons/AppButtons';

const Leaves = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation();

  const handleCategoryPress = item => {
    console.log(item, 'here is the main item');

    setSelectedCategory(prevCategory => {
      if (prevCategory === item.id) {
        return selectedCategory;
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
    <View style={styles.leaveContainer}>
      <HeaderAtom
        title="Leaves"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
      />
      <View>
        <FlatList
          horizontal
          contentContainerStyle={styles.itemLeave}
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
      <View style={styles.leaveButton}>
        <AppButton
          btnStyle={styles.leaveBtn}
          btnTextStyle={{color: COLORS.WHITE}}
          btnText={'Leave Request'}
          onPress={() => navigation.navigate(ROUTES.LEAVE_REQUEST)}
        />
      </View>
    </View>
  );
};

export default Leaves;
