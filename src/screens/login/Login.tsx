import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './login.styles';
import { Input, Button } from '../../components';
import { useUser } from '../../store/user';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isLoadingUser, fetchUser } = useUser();

  const handleLogin = useCallback(() => {
    fetchUser({ username, password });
  }, [fetchUser, password, username]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You may enter any credentials</Text>

      <Input
        value={username}
        onChangeText={setUsername}
        placeholder={'username'}
      />

      <Input
        value={password}
        onChangeText={setPassword}
        placeholder={'password'}
        secureTextEntry
        style={styles.input}
      />

      <Button
        onPress={handleLogin}
        disabled={isLoadingUser}
        isLoading={isLoadingUser}
      >
        Login
      </Button>
    </View>
  );
};
