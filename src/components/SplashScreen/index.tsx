import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666',
  },
});

const SplashScreen: React.FC = () => {
  return (
    <LinearGradient style={styles.container} colors={['#f44336', '#e46400']}>
      <ActivityIndicator size="large" color="#fff" />
    </LinearGradient>
  );
};

export default SplashScreen;
