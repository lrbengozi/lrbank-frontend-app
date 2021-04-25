import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

const SingIn: React.FC = () => {
  const { singIn } = useAuth();
  
  async function handleSingIn() {    
    await singIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sing In" onPress={handleSingIn} />
    </View>
  )
}

export default SingIn;