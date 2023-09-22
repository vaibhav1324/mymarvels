import * as React from 'react';

import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import { useColorScheme } from 'react-native-appearance';

import MainNavigation from 'navigation/MainNavigation';

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <>
      <StatusBar />
      <ThemeProvider useDark={colorScheme === 'dark'}>
        <MainNavigation />
      </ThemeProvider>
    </>
  );
};

export default App;
