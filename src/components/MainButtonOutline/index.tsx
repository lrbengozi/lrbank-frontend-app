import React from 'react';
import {TouchableHighlight, TouchableHighlightProps, Text} from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableHighlightProps {
  caption: string;
}

const MainButtonOutline: React.ElementType<ButtonProps> = ({
  caption,
  ...props
}: ButtonProps) => {
  return (
    <TouchableHighlight
      style={styles.appMainButtonOutline}
      {...props}
      underlayColor="#fff6ed">
      <Text style={styles.appMainButtonOutlineText}>{caption}</Text>
    </TouchableHighlight>
  );
};

export default MainButtonOutline;
