import * as React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {ThemeProvider} from 'react-native-elements';
import {useColorScheme} from 'react-native-appearance';

const App = () => {
    let colorScheme = useColorScheme();
    return (
        <ThemeProvider useDark={colorScheme === 'dark'}>
            <MainNavigation />
        </ThemeProvider>
    );
};

export default App;
