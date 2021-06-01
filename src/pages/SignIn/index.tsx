import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';

import styles from '../../styles';

function SignIn() {
  const {signIn} = useAuth();
  const navigation = useNavigation();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textLogo}>LRBank</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.appButtonCreateAccount}
          onPress={() => navigation.navigate('SignUp')}
          underlayColor="#ddd">
          <Text style={styles.appButtonCreateAccountText}>Criar Conta</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.appButtonLogin}
          onPress={() => {}}
          underlayColor="#ddd">
          <Text style={styles.appButtonLoginText}>Já tenho conta</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default SignIn;
