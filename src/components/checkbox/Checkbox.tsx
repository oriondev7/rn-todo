import React from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './checkbox.styles';

// eslint-disable-next-line
export const Checkbox = ({ isOn, onToggle }) => {
  return (
    <Pressable onPress={onToggle}>
      <View style={isOn ? styles.isOn : styles.isOff} />
    </Pressable>
  );
};
