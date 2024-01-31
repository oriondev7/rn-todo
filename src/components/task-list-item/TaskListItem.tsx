import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../store/tasks/slice';
import { selectTaskById } from '../../store/tasks/selectors';
import { Checkbox } from '../checkbox';
import { TaskInnerButton } from './components/task-inner-button';
import { Text, View } from 'react-native';
import { Routes } from '../../navigators/routes';
import { CTSType } from '../../screens/constants';
import { styles } from './task-list-item.styles';

/* eslint-disable */
export const TaskListItem = ({ id, nav, editable }) => {
  const task = useSelector(state => selectTaskById(state, id));
  const { image, text, completed, location } = task;

  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteTask(id));
  const onToggle = () => {
    if (editable) {
      dispatch(toggleTask(id));
    }
  };

  const onEdit = () =>
    nav.navigate(Routes.CONFIGURE_TASK, {
      screenType: CTSType.EDIT_TASK_SCREEN,
      initialText: text,
      id: id,
      location: location,
      image: image,
    });

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Checkbox isOn={completed} onToggle={onToggle} />
        <Text style={styles.taskTitle}>{text}</Text>
      </View>
      {editable ? (
        <View style={styles.innerButtonsContainer}>
          <TaskInnerButton onPress={onDelete} title={'Delete'} />
          <TaskInnerButton onPress={onEdit} title={'Edit'} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
