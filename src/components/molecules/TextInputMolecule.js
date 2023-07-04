import React from 'react';
import TextInputAtom from '../../components/atoms/input/TextInputAtom';

const TextInputMolecule = ({label, mode, placeholder, ...otherProps}) => {
  return (
    <TextInputAtom
      label={label}
      mode={mode}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export default TextInputMolecule;
