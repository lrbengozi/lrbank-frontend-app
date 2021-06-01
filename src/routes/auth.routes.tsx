import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerTintColor: '#e46400', headerTitle: 'Criar conta'}}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
