import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouts } from './routes';
import { TaskList, Map, AnimatedSquare, Generator } from '../screens';
import { ScreenTitle } from './constants';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: ScreenTitle.TASK_LIST }}
        name={TabRouts.TASK_LIST}
        component={TaskList}
      />
      <Tab.Screen
        options={{ title: ScreenTitle.MAP }}
        name={TabRouts.MAP}
        component={Map}
      />
      <Tab.Screen
        options={{ title: ScreenTitle.ANIMATION }}
        name={TabRouts.ANIMATION}
        component={AnimatedSquare}
      />
      <Tab.Screen
        options={{ title: ScreenTitle.GENERATOR }}
        name={TabRouts.GENERATOR}
        component={Generator}
      />
    </Tab.Navigator>
  );
};
