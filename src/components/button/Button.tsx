import React, { PropsWithChildren } from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { styles } from './button.styles';
import { ButtonTypes } from './button.types';

export const Button: React.FC<PropsWithChildren<ButtonTypes>> = ({
  isLoading,
  children,
  ...rest
}) => {
  return (
    <Pressable {...rest} style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </Pressable>
  );
};
