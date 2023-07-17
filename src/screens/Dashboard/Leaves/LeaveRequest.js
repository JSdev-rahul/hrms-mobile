import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DropDown from '../../../components/atoms/dropDown/DropDown';
import {options} from '../../../constants/listData';
import HeaderAtom from '../../../components/atoms/header/HeaderAtom';
import {COLORS, IMAGES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import RadioButton from '../../../components/atoms/radioButton/RadioButton';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import {moderateScale, scale} from 'react-native-size-matters';
import TextInputTemplate from '../../../components/templates/TextInputTemplate';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import AppColorBtn from '../../../components/atoms/buttons/AppColorBtn';

const LeaveRequest = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const radioButtonOptions = ['Full Time', 'First Half', 'Second Half'];
  const [selectedOption, setSelectedOption] = useState(radioButtonOptions[0]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const onSelect = item => {
    setSelectedItem(item);
  };

  const onDateChange = selectedDate => {
    setDate(selectedDate);
  };

  const onConfirmDate = selectedDate => {
    setDate(selectedDate);
    setOpen(false);
  };

  const onCancelDate = () => {
    setOpen(false);
  };

  return (
    <View style={{flex: 1}}>
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
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {radioButtonOptions.map(singleOption => (
          <RadioButton
            key={singleOption}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}>
            {singleOption}
          </RadioButton>
        ))}
      </View>
      <Text
        style={{
          fontWeight: '600',
          bottom: 30,
          marginHorizontal: moderateScale(8),
        }}>
        Date
      </Text>

      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          backgroundColor: COLORS.WHITE,
          height: 40,
          borderWidth: 0.5,
          borderColor: COLORS.BLACK,
          bottom: moderateScale(20),
          marginHorizontal: moderateScale(10),
          borderRadius: moderateScale(5),
        }}>
        <View style={styles.DatePicker}>
          <Image
            resizeMode="contain"
            style={styles.dateImage}
            source={IMAGES.datePicker}
          />
        </View>
        <View style={{justifyContent: 'center', top: 10, marginStart: 10}}>
          <Text style={{fontWeight: '600'}}> {date.toDateString()}</Text>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          onDateChange={onDateChange}
          onConfirm={onConfirmDate}
          onCancel={onCancelDate}
        />
      </TouchableOpacity>
      <View style={{marginHorizontal: 10}}>
        <Text style={{fontWeight: '600', bottom: moderateScale(10)}}>
          Reason for absence
        </Text>
        <TextInputTemplate
          placeholder={'E.g Feeling not well'}
          style={{
            fontSize: scale(12),
            height: 100,
            bottom: moderateScale(10),
          }}
        />
      </View>
      <AppColorBtn
        label="Add File"
        btnColorStyle={{
          backgroundColor: COLORS.GREY_LIGHT,
          color: COLORS.WHITE,
        }}
        img={IMAGES.upload}
        btnColorTextStyle={{
          color: COLORS.BLACK,
          fontWeight: '600',
          marginHorizontal: 5,
        }}
        btnText={'Choose File'}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: moderateScale(10),
          width: '100%',
        }}>
        <AppButton
          label="Add File"
          btnStyle={{
            backgroundColor: COLORS.GREEN,
            color: COLORS.WHITE,
          }}
          btnTextStyle={{color: COLORS.WHITE}}
          btnText={'Send'}
          onPress={() => navigation.navigate(ROUTES.LEAVE_REQUEST)}
        />
      </View>
    </View>
  );
};

export default LeaveRequest;
