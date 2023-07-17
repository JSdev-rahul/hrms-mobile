import React from 'react';
import {TextInput} from 'react-native-paper';

const TextInputAtom = ({
  onChangeText,
  value,
  keyboardType,
  editable,
  textAlignVertical,
  style = {},
  ...otherProps
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      editable={editable}
      style={style}
      textAlignVertical={textAlignVertical}
      {...otherProps}
    />
  );
};

export default TextInputAtom;
