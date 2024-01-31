import React from 'react';
import { Provider } from 'react-redux';
import storeConfig from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from './navigators/RootNavigator';
import { ActivityIndicator } from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={storeConfig().store}>
      <PersistGate
        loading={<ActivityIndicator size="large" style={{ marginTop: 100 }} />}
        persistor={storeConfig().persistor}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
