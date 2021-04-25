import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { singIn } from '../../services/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

const SingIn: React.FC = () => {
  async function handleSingIn() {
    const response = await singIn();
    console.log(response);
  }

  return (
    <View style={styles.container}>
      <Button title="Sing In" onPress={handleSingIn} />
    </View>
  )
}

export default SingIn;