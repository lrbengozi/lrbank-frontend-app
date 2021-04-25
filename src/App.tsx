import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { singIn } from './services/auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
};

export default App;