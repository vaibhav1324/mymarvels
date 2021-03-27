import * as React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {useColorScheme} from 'react-native-appearance';
import MainNavigation from 'navigation/MainNavigation';
import {StatusBar} from 'react-native';

const App = () => {
    let colorScheme = useColorScheme();
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
