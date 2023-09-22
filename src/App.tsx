import * as React from 'react';

import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import { ReactQueryConfigProvider } from 'react-query';

import { useColorScheme } from 'react-native-appearance';

import { queryConfig } from 'utils';

import MainNavigation from 'navigation/MainNavigation';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar />
      <ThemeProvider useDark={colorScheme === 'dark'}>
        <ReactQueryConfigProvider config={queryConfig}>
          <MainNavigation />
        </ReactQueryConfigProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
