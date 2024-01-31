import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectTasksWithLocation } from '../../store/tasks/selectors';

export const Map = () => {
  const tasks = useSelector(selectTasksWithLocation);

  return (
    <MapView
      style={StyleSheet.absoluteFill}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.3,
        longitudeDelta: 0.2,
      }}
    >
      {tasks.length !== 0 ? (
        tasks.map((task, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: task.location.latitude + index,
              longitude: task.location.longitude + index,
            }}
          />
        ))
      ) : (
        <></>
      )}
    </MapView>
  );
};
