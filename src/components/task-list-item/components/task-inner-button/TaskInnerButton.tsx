import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './task-inner-button.styles';

// eslint-disable-next-line
export const TaskInnerButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.container}>{title}</Text>
    </Pressable>
  );
};
