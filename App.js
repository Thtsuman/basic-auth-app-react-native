import * as React from 'react';
import {NavigationWrapper} from './src/navigation';
import {AppContextProvider, AuthContextProvider} from './src/contexts';
import {Alert} from './src/components';

function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <NavigationWrapper />
        <Alert />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default App;
