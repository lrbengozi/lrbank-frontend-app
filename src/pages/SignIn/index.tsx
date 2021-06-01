import React from 'react';
import {View, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';

import styles from '../../styles';
import MainButton from '../../components/MainButton';
import MainButtonOutline from '../../components/MainButtonOutline';

function SignIn() {
  const {signIn} = useAuth();
  const navigation = useNavigation();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.textLogo}>LRBank</Text>
      </View>
      <View style={styles.footer}>
        <MainButton
          caption="Criar Conta"
          onPress={() => navigation.navigate('SignUp')}
        />
        <MainButtonOutline caption="Já tenho conta" onPress={() => {}} />
      </View>
    </View>
  );
}

export default SignIn;
