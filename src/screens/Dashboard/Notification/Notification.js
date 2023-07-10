import {View, Text, FlatList} from 'react-native';
import React from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {IMAGES, ROUTES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import ItemNotification from './ItemNotification';
import {notifications} from '../../../constants/listData';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderAtom
        title="Notification"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />
      <View>
        <FlatList
          data={notifications}
          renderItem={({item}) => <ItemNotification item={item} />}
        />
      </View>
    </View>
  );
};

export default Notification;
