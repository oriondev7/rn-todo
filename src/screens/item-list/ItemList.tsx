import React, { useEffect } from 'react';
import { styles } from './item-list.styles';
import { FlatList, Image, View, Text } from 'react-native';
import { images } from './images';

/* eslint-disable */
export const ItemList: React.FC = ({ route }) => {
  let items: object[] = [];

  useEffect(() => {
    for (let i = 0; i < route.params.itemsCount; i++) {
      items.push({
        serialNumber: Math.random().toString(),
        image: images[i % Object.keys(images).length],
        id: i,
      });
    }
  }, [items]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>Serial number: { item.serialNumber }</Text>
            <Text>ID: { item.id }</Text>
            <Image style={styles.photo} source={item.image} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
