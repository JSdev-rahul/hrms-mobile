import React from 'react';
import {TextInput} from 'react-native-paper';

const TextInputAtom = ({
  onChangeText,
  value,
  keyboardType,
  editable,
  style,
  ...otherProps
}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      editable={editable}
      style={style}
      {...otherProps}
    />
  );
};

export default TextInputAtom;
