import { createSlice } from '@reduxjs/toolkit';
import { TASKS_SLICE } from './constants';

const initialState = {
  0: { id: 0, text: 'Learn React', completed: true, location: undefined },
  1: { id: 1, text: 'Learn Redux', completed: false, location: undefined },
  2: {
    id: 2,
    text: 'Build something fun',
    completed: false,
    location: undefined,
  },
};

const nextTaskId = tasks => {
  // eslint-disable-next-line
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
  return maxId + 1;
};

const tasksSlice = createSlice({
  name: TASKS_SLICE,
  initialState,
  reducers: {
    addTask(state, action) {
      const newTaskId = nextTaskId(Object.values(state));
      const payload = action.payload;

      state[newTaskId] = {
        image: payload.image,
        text: payload.text,
        completed: false,
        id: newTaskId,
        location: payload.location,
      };
    },
    editTask: {
      reducer(state, action) {
        const taskId = action.payload.taskId;

        state[taskId].image = action.payload.image;
        state[taskId].text = action.payload.text;
        state[taskId].location = action.payload.location;
      },

      prepare(taskId, image, text, location) {
        return {
          payload: { taskId, image, text, location },
        };
      },
    },
    toggleTask(state, action) {
      const taskId = action.payload;
      state[taskId].completed = !state[taskId].completed;
    },
    deleteTask(state, action) {
      delete state[action.payload];
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, editTask, toggleTask, deleteTask } = tasksSlice.actions;
