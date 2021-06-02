import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import styles from './styles';

const MainTextInput: React.ElementType<TextInputProps> = ({
  ...props
}: TextInputProps) => {
  return <TextInput style={styles.mainTextInput} {...props} />;
};

export default MainTextInput;
