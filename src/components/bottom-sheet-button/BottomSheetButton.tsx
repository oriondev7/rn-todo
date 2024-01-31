import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './bottom-sheet-button.styles';
import { BSBType } from './constants';

// eslint-disable-next-line
export const BottomSheetButton: React.FC = ({ onPress, type, title }) => {
  return (
    <TouchableOpacity
      style={
        type === BSBType.ACTION ? styles.actionButton : styles.cancelButton
      }
      onPress={onPress}
    >
      <Text
        style={
          type === BSBType.ACTION ? styles.actionTitle : styles.cancelTitle
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
