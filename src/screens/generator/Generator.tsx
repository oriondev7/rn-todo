import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './generator.styles';
import { MainAcceptButton } from '../../components';
import { Routes } from '../../navigators/routes';

/* eslint-disable */
export const Generator: React.FC = ({ navigation }) => {
  const [itemsCount, setItemsCount] = useState('100');
  const onChangeText = (itemsCount: string) => {
    if (/^\d+$/.test(itemsCount)) {
      setItemsCount(itemsCount)
    }
  }

  const generateItems = () => {
    navigation.navigate(Routes.ITEM_LIST, {
        itemsCount: parseInt(itemsCount),
      })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Do you want {'\n'}to generate tasks?
      </Text>
      <View>
        <Text style={styles.inputTitle}>Numbers of tasks</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={itemsCount}
          keyboardType='number-pad'
        />
        <MainAcceptButton title={'Generate'} onPress={generateItems} />
      </View>
    </View>
      </TouchableWithoutFeedback>
  );
};
