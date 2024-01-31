import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './rectangle-button.styles';
import { RBType } from './constants';

export const RectangleButton: React.FC = ({
  onPress,
  type,
  title,
  containerStyle,
  titleStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          type === RBType.ADD
            ? styles.addButtonBackground
            : styles.filterButtonBackground,
          containerStyle,
        ]}
      >
        <Text
          style={[
            type === RBType.ADD
              ? styles.addButtonTitle
              : styles.filterButtonTitle,
            titleStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
