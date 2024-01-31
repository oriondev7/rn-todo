import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { styles } from './input.styles';

export const Input: React.FC<TextInputProps> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput {...props} style={[styles.input]} />
    </View>
  );
};
