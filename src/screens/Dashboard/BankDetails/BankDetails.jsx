import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {BankDetail} from '../../../constants/listData';
import {useNavigation} from '@react-navigation/native';
const BankDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderAtom
        title="Bank Details"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.detailsContainer}>
        {BankDetail.map(Item => {
          return (
            <View style={styles.titleStyle}>
              <Text style={styles.title}>{Item.Title}</Text>
              <Text style={styles.subTitle}>{Item.SubTitle}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default BankDetails;
