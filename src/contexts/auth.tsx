import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

type User = {
  name: string;
  email: string;
};

type AuthContextData = {
  singed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@LRBank:user');
      const storagedToken = await AsyncStorage.getItem('@LRBank:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    try {
      const response = await auth.signIn(email, password);

      setUser(response.user);

      api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

      await AsyncStorage.setItem('@LRBank:user', JSON.stringify(response.user));
      await AsyncStorage.setItem(
        '@LRBank:token',
        JSON.stringify(response.token),
      );
    } catch (error) {
      console.log(`Error on SignIn: ${error.message}`);
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{singed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
