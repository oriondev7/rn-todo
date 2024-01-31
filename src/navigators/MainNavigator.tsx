import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { ConfigureTask } from '../screens/configure-task/ConfigureTask';
import { CompletedTaskList } from '../screens/completed-task-list/CompletedTaskList';
import { TabNavigator } from './TabNavigator';
import { ScreenTitle } from './constants';
import { CTSType } from '../screens/constants';
import { ItemList } from '../screens';

const Stack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.TAB_NAVIGATOR}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={Routes.TAB_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        options={({ route }) => ({
          title:
            route.params.screenType === CTSType.ADD_TASK_SCREEN
              ? ScreenTitle.ADD_TASK
              : ScreenTitle.EDIT_TASK,
        })}
        name={Routes.CONFIGURE_TASK}
        component={ConfigureTask}
      />
      <Stack.Screen
        options={{ title: ScreenTitle.COMPLETED_TASK_LIST }}
        name={Routes.COMPLETED_TASKS_LIST}
        component={CompletedTaskList}
      />
      <Stack.Screen
        options={{ title: ScreenTitle.ITEM_LIST }}
        name={Routes.ITEM_LIST}
        component={ItemList}
      />
    </Stack.Navigator>
  );
};
