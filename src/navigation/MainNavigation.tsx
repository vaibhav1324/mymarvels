import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'screens/SplashScreen';
import Welcome from 'screens/Welcome';
import Login from 'screens/Login';
import SignUp from 'screens/SignUp';
import Tabs from './TabNavigation';

export const noHeader = {header: () => null};

export const ROUTES = Object.freeze({
    SPLASH: 'Splash',
    WELCOME: 'Welcome',
    LOGIN: 'Login',
    SINGUP: 'SignUp',
    HOME: 'Home',
});

const screens = [
    {
        name: ROUTES.WELCOME,
        component: Welcome,
        options: noHeader,
    },
    {
        name: ROUTES.LOGIN,
        component: Login,
        options: noHeader,
    },
    {
        name: ROUTES.SINGUP,
        component: SignUp,
        options: noHeader,
    },
    {
        name: ROUTES.HOME,
        component: Tabs,
        options: noHeader,
    },
];

const routes = () =>
    screens.map((item, index) => <Screen key={`${index}`} {...item} />);

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
