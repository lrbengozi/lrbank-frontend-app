import React from 'react';
import {View, Modal, TouchableWithoutFeedback} from 'react-native';
import {useAuth} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';

import styles from '../../styles';
import localStyle from './styles';
import MainButton from '../../components/MainButton';
import MainButtonOutline from '../../components/MainButtonOutline';
import TitleText from '../../components/TitleText';
import MainTextInput from '../../components/MainTextInput';

function SignIn() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [email, setEmail] = React.useState('email@email.com');
  const [password, setPassword] = React.useState('testesenha');

  const {signIn} = useAuth();
  const navigation = useNavigation();

  async function handleSignIn() {
    await signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <TitleText caption="LRBank" />
      </View>
      <View style={styles.footer}>
        <MainButton
          caption="Criar Conta"
          onPress={() => navigation.navigate('SignUp')}
        />
        <MainButtonOutline
          caption="Já tenho conta"
          onPress={() => setModalVisible(!modalVisible)}
        />
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <TouchableWithoutFeedback
              onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.footer}>
                <View style={localStyle.modalView}>
                  <MainTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <MainTextInput
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <MainButton caption="Entrar" onPress={handleSignIn} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default SignIn;
