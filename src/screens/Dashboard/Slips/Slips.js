import {Image, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {List} from 'react-native-paper';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ItemSlips from './ItemSlips';
import {slipsData} from '../../../constants/listData';
import styles from './styles';

const Slips = () => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderAtom
        title="Slips"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />

      <List.Section style={styles.listSection}>
        <List.Accordion
          title="Salary Slips"
          titleStyle={{color: COLORS.BLACK, paddingRight: moderateScale(20)}}
          left={props => <List.Icon {...props} />}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={slipsData}
            renderItem={({item}) => <ItemSlips item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Slips;
