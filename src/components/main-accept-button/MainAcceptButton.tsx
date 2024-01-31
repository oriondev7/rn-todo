import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { styles } from './main-accept-button.styles';

// eslint-disable-next-line
export const MainAcceptButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};
