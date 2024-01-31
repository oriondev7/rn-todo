import { createSelector } from '@reduxjs/toolkit';

const selectTasks = state => Object.values(state.tasks);

export const selectTaskIds = createSelector(selectTasks, tasks =>
  tasks.map(task => task.id),
);

export const selectCompletedTaskIds = createSelector(selectTasks, tasks =>
  tasks.filter(task => task.completed).map(task => task.id),
);

export const selectTaskById = (state, taskId) => {
  return Object.values(state.tasks).find(task => task.id === taskId);
};

export const selectTasksWithLocation = createSelector(selectTasks, tasks =>
  tasks.filter(task => task.location !== undefined),
);
