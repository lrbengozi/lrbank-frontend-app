import React from 'react';
import {View} from 'react-native';
import MainButton from '../../components/MainButton';
import MainTextInput from '../../components/MainTextInput';

import TitleText from '../../components/TitleText';

import styles from '../../styles';

const SignUp: React.FC = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [socialSecurityNumber, setSocialSecurityNumber] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TitleText caption="LRBank" />
      </View>
      <View>
        <MainTextInput
          placeholder="Nome Completo"
          value={fullName}
          onChangeText={setFullName}
        />
        <MainTextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <MainTextInput
          placeholder="RG ou CNH"
          keyboardType="numeric"
          value={socialSecurityNumber}
          onChangeText={setSocialSecurityNumber}
        />
        <MainTextInput
          placeholder="CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />
      </View>
      <View style={styles.footer}>
        <MainButton caption="Cadastrar" onPress={() => {}} />
      </View>
    </View>
  );
};

export default SignUp;
