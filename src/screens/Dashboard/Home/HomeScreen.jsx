import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import BottomSheetAtom from '../../../components/atoms/bottomSheet/BottomSheetAtom';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {IMAGES, ROUTES} from '../../../constants';
import ItemStatus from './ItemStatus';
import {timeStatus, weekStatus} from '../../../constants/listData';
import ItemWeekStatus from './ItemWeekStatus';
import ListHeadeComponent from './ListHeadeComponent';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <HeaderAtom
          title="Home"
          imageRightArrow={IMAGES.notify}
          onPressIn={() => navigation.navigate(ROUTES.NOTIFICATION)}
        />
        <View style={styles.mainContainer}>
          <View style={styles.userContainer}>
            <Image style={styles.userImage} source={IMAGES.user} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userTitle}>Welcome Androew Joshep</Text>
            <Text style={styles.userSubTitle}>React Native Developer</Text>
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={timeStatus}
            renderItem={({item, index}) => (
              <ItemStatus item={item} index={index} />
            )}
          />
        </View>
        <View>
          <FlatList
            ListHeaderComponent={ListHeadeComponent}
            data={weekStatus}
            contentContainerStyle={styles.listStyle}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ItemWeekStatus item={item} />}
          />
        </View>
      </View>
      <BottomSheetAtom />
    </View>
  );
}
export default HomeScreen;
