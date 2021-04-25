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
  const { singed, user, singIn } = useAuth();
  
  console.log(singed);
  console.log(user);

  async function handleSingIn() {    
    singIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sing In" onPress={handleSingIn} />
    </View>
  )
}

export default SingIn;