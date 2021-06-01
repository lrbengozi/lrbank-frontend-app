import React from 'react';
import {TouchableHighlight, TouchableHighlightProps, Text} from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableHighlightProps {
  caption: string;
}

const MainButton: React.ElementType<ButtonProps> = ({
  caption,
  ...props
}: ButtonProps) => {
  return (
    <TouchableHighlight
      style={styles.appMainButton}
      {...props}
      underlayColor="#ffd5b3">
      <Text style={styles.appMainButtonText}>{caption}</Text>
    </TouchableHighlight>
  );
};

export default MainButton;
