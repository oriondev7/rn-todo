import { MMKVLoader } from 'react-native-mmkv-storage';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import mmkvFlipper from 'rn-mmkv-storage-flipper';
import { userReducer } from './user';
import { tasksReducer } from './tasks/slice';
import { configureStore } from '@reduxjs/toolkit';

/* eslint-disable */
const storage = new MMKVLoader().withEncryption().initialize();
const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: any[] = [];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());

  mmkvFlipper(storage)
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(
      // https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      },
    ).concat(middlewares),
});

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
