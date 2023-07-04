import React from 'react';
import TextInputMolecule from '../molecules/TextInputMolecule';
import styles from './styles';
import {COLORS} from '../../constants';

const TextInputTemplate = props => {
  return (
    <TextInputMolecule
      mode="outlined"
      label={props.label}
      placeholder={props.placeholder}
      outlineStyle={styles.outLineStyles}
      underlineStyle={styles.underLineStyle}
      activeOutlineColor={COLORS.PURPLE}
      textColor={COLORS.PURPLE}
      contentStyle={styles.textInput}
      secureTextEntry={props.secureTextEntry}
      
      {...props}
    />
  );
};
export default TextInputTemplate;
