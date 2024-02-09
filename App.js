import * as React from 'react';
import {NavigationWrapper} from './src/navigation';
import {AuthContextProvider} from './src/contexts';

function App() {
  return (
    <AuthContextProvider>
      <NavigationWrapper />
    </AuthContextProvider>
  );
}

export default App;
