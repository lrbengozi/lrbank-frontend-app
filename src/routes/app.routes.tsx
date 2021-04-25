import React from 'react';
import HomePage from '../pages/HomePage';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="SingIn" component={HomePage}/>
  </AppStack.Navigator>
)

export default AppRoutes;