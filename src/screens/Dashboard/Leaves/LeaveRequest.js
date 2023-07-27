import React, {useState} from 'react';
import styles from './styles';
import {options} from '../../../constants/listData';
import {IMAGES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DropDown from '../../../components/atoms/dropDown/DropDown';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppColorBtn from '../../../components/atoms/buttons/AppColorBtn';
import RadioButton from '../../../components/atoms/radioButton/RadioButton';
import TextInputTemplate from '../../../components/templates/TextInputTemplate';

const LeaveRequest = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const radioButtonOptions = ['Full Time', 'First Half', 'Second Half'];
  const [selectedOption, setSelectedOption] = useState(radioButtonOptions[0]);
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();
  const onSelect = item => {
    setSelectedItem(item);
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDate(date);
    hideDatePicker();
  };
  return (
    <View style={styles.reqContainer}>
      <HeaderAtom
        title="Leave Request"
        imageBack={IMAGES.backArrow}
        onPress={() => navigation.goBack()}
      />
      <DropDown
        label={'Leave Type'}
        value={selectedItem}
        data={options}
        onSelect={onSelect}
      />
      <View style={styles.radioButton}>
        {radioButtonOptions.map(singleOption => (
          <RadioButton
            key={singleOption}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}>
            {singleOption}
          </RadioButton>
        ))}
      </View>
      <Text style={styles.dateStyle}>Date</Text>

      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.datePickerContainer}>
        <View style={styles.DatePicker}>
          <Image
            resizeMode="contain"
            style={styles.dateImage}
            source={IMAGES.datePicker}
          />
        </View>
        <View style={styles.date}>
          <Text style={styles.dateText}> {date.toDateString()}</Text>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>
      <View style={styles.absanceContainer}>
        <Text style={styles.absanceText}>Reason for absence</Text>
        <TextInputTemplate
          placeholder={'E.g Feeling not well'}
          style={styles.inputStyle}
        />
      </View>
      <AppColorBtn
        label="Add File"
        btnColorStyle={styles.selectBtn}
        img={IMAGES.upload}
        btnColorTextStyle={styles.selectButton}
        btnText={'Choose File'}
      />
      <View style={styles.buttonContainer}>
        <AppButton
          label="Add File"
          btnStyle={styles.sendButton}
          btnTextStyle={styles.btnText}
          btnText={'Send'}
          onPress={() => navigation.navigate(ROUTES.LEAVE_REQUEST)}
        />
      </View>
    </View>
  );
};

export default LeaveRequest;
