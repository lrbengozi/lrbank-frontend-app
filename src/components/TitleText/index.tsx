import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

interface ButtonProps {
  caption: string;
}

const TitleText: React.ElementType<ButtonProps> = ({caption}: ButtonProps) => {
  return <Text style={styles.titleText}>{caption}</Text>;
};

export default TitleText;
