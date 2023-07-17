import {FlatList, Image, ScrollView, View} from 'react-native';
import React from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ItemAbout from './ItemAbout';
import {List, Text} from 'react-native-paper';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {aboutData} from '../../../constants/listData';

const About = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <HeaderAtom
        title="About us"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={IMAGES.meeting} style={{width: 350, height: 350}} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View>
          <List.Section style={styles.listSection}>
            <List.Accordion
              title="Email"
              titleStyle={{
                color: COLORS.BLACK,
                paddingRight: moderateScale(20),
                marginVertical: 10,
              }}>
              <List.Item
                title="santophy@gmail.com"
                titleStyle={{paddingRight: 30}}
              />
            </List.Accordion>
          </List.Section>
        </View>
        <View>
          <List.Section style={styles.listSection}>
            <List.Accordion
              title="Terms And Conditions"
              titleStyle={{
                color: COLORS.BLACK,
                paddingRight: moderateScale(20),
                marginVertical: 10,
              }}>
              <List.Item
                title="santophy@gmail.com"
                titleStyle={{paddingRight: 30}}
              />
              <List.Item
                title="santophy@gmail.com"
                titleStyle={{paddingRight: 30}}
              />
            </List.Accordion>
          </List.Section>
        </View>
        <View>
          <List.Section style={styles.listSection}>
            <List.Accordion
              title="Privacy And Policies"
              titleStyle={{
                color: COLORS.BLACK,
                paddingRight: moderateScale(20),
                marginVertical: 10,
              }}>
              <List.Item
                title="santophy@gmail.com"
                titleStyle={{paddingRight: 30}}
              />
              <List.Item
                title="santophy@gmail.com"
                titleStyle={{paddingRight: 30}}
              />
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>
      <View style={{paddingBottom: 10}}>
        <Text style={{textAlign: 'center', color: COLORS.GREEN}}>
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default About;
