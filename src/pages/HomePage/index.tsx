import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../contexts/auth'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomePage: React.FC = () => {
  const { user, singOut } = useAuth();

  async function handleSingOut() {
    singOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sing Out" onPress={handleSingOut} />
    </View>
  )
}

export default HomePage;