import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { selectCompletedTaskIds } from '../../store/tasks/selectors';
import { TaskListItem } from '../../components/task-list-item/TaskListItem';
import { styles } from './completed-task-list.styles';

export const CompletedTaskList = () => {
  const completedTaskIds = useSelector(selectCompletedTaskIds);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Your Completed Tasks
      </Text>
      <FlatList
        data={completedTaskIds}
        renderItem={({ item }) => <TaskListItem id={item} editable={false} />}
        keyExtractor={item => item}
      />
    </View>
  );
};
