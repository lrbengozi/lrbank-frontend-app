import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import SplashScreen from '../components/SplashScreen';

const Routes: React.FC = () => {
  const { singed, loading } = useAuth();

  return (
    loading ? <SplashScreen /> :
      singed ? <AppRoutes /> : <AuthRoutes />
  );
}

export default Routes;