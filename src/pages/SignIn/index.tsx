import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    alignSelf: 'center',
    marginBottom: 100,
  },
  textLogo: {
    fontSize: 50,
    color: '#e46400',
    textAlign: 'center',
    fontFamily: 'OdibeeSans-Regular',
  },
  buttons: {
    padding: 10,
  },
  appButtonCreateAccount: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#e46400',
  },
  appButtonCreateAccountText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  appButtonLogin: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#e46400',
  },
  appButtonLoginText: {
    fontSize: 16,
    color: '#e46400',
    textAlign: 'center',
  },
});

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
