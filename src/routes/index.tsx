import React from 'react';
import { View, ActivityIndicator} from 'react-native'
import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { singed, loading } = useAuth();

  if (loading && singed) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999"/>
      </View>
    );
  }
  
  return(
    singed ? <AppRoutes /> : <AuthRoutes />
  );
}

export default Routes;