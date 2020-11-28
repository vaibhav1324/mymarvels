import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'screens/SplashScreen';
import Welcome from 'screens/Welcome';
import Login from 'screens/Login';
import SignUp from 'screens/SignUp';

const noHeader = {header: () => null};

export const ROUTES = Object.freeze({
    SPLASH: 'Splash',
    WELCOME: 'Welcome',
    LOGIN: 'Login',
    SINGUP: 'SignUp',
});

const routes = () => (
    <>
        <Screen name={ROUTES.WELCOME} component={Welcome} options={noHeader} />
        <Screen name={ROUTES.LOGIN} component={Login} options={noHeader} />
        <Screen name={ROUTES.SINGUP} component={SignUp} options={noHeader} />
    </>
);

const {Navigator, Screen} = createStackNavigator();

const MainNavigation = () => {
    const [isSplashScreen, setIsSplashScreen] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsSplashScreen(false);
        }, 3000);
    }, []);

    return (
        <NavigationContainer>
            <Navigator>
                {isSplashScreen ? (
                    <Screen
                        name={ROUTES.SPLASH}
                        component={SplashScreen}
                        options={noHeader}
                    />
                ) : (
                    routes()
                )}
            </Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
