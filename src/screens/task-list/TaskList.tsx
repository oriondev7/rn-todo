import React from 'react';
import { useSelector } from 'react-redux';
import { selectTaskIds } from '../../store/tasks/selectors';
import { Routes } from '../../navigators/routes';
import { CTSType } from '../constants';
import { View, Text, FlatList } from 'react-native';
import { styles } from './task-list.styles';
import { TaskListItem, RectangleButton, RBType } from '../../components';

// eslint-disable-line
export const TaskList: React.FC = ({ navigation }) => {
  const taskIds = useSelector(selectTaskIds);

  const onCompleted = () => navigation.navigate(Routes.COMPLETED_TASKS_LIST);
  const onAdd = () =>
    navigation.navigate(Routes.CONFIGURE_TASK, {
      screenType: CTSType.ADD_TASK_SCREEN,
      initialText: '',
    });

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <RectangleButton
          onPress={onCompleted}
          type={RBType.FILTER}
          title={'Completed'}
          containerStyle={{ marginTop: 8 }}
        />
        <RectangleButton
          onPress={onAdd}
          type={RBType.ADD}
          title={'+ Add task'}
          containerStyle={{ marginTop: 8 }}
        />
      </View>
      <Text style={styles.title}>Your Tasks</Text>
      <FlatList
        data={taskIds}
        renderItem={({ item }) => (
          <TaskListItem id={item} nav={navigation} editable={true} />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};
