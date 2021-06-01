import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

const SignUp: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Primeiro Nome" />
    </View>
  );
};

export default SignUp;
