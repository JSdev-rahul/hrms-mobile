import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {IMAGES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {List, Text} from 'react-native-paper';

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

      <View style={styles.imageContainer}>
        <Image source={IMAGES.meeting} style={styles.meetingImage} />
      </View>
      <ScrollView style={styles.listContainer}>
        <View>
          <List.Section style={styles.listSection}>
            <List.Accordion title="Email" titleStyle={styles.emailStyle}>
              <List.Item
                title="santophy@gmail.com"
                titleStyle={styles.emailTitle}
              />
            </List.Accordion>
          </List.Section>
        </View>
        <View>
          <List.Section style={styles.listSection}>
            <List.Accordion
              title="Terms And Conditions"
              titleStyle={styles.termConditon}>
              <List.Item
                title="santophy@gmail.com"
                titleStyle={styles.titleStyle}
              />
              <List.Item
                title="santophy@gmail.com"
                titleStyle={styles.titleStyle}
              />
            </List.Accordion>
          </List.Section>
        </View>
        <View>
          <List.Section style={styles.listSection}>
            <List.Accordion
              title="Privacy And Policies"
              titleStyle={styles.listAccordion}>
              <List.Item
                title="santophy@gmail.com"
                titleStyle={styles.titleStyle}
              />
              <List.Item
                title="santophy@gmail.com"
                titleStyle={styles.titleStyle}
              />
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>
      <View style={styles.versionStyle}>
        <Text style={styles.versionTextStyle}>Version 1.0.0</Text>
      </View>
    </View>
  );
};

export default About;
