import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'screens/SplashScreen';
import Welcome from 'screens/Welcome';
import Login from 'screens/Login';
import SignUp from 'screens/SignUp';
import Tabs from './TabNavigation';
import {useCredentialStore} from 'stores/useCredentialStore';

export const noHeader = {header: () => null};

export const ROUTES = Object.freeze({
    SPLASH: 'Splash',
    WELCOME: 'Welcome',
    LOGIN: 'Login',
    SINGUP: 'SignUp',
    HOME: 'Home',
});

const authScreens = [
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
];

const mainScreens = [
    {
        name: ROUTES.HOME,
        component: Tabs,
        options: noHeader,
    },
];

const routes = (token?: string) => {
    const screens = Boolean(token) ? mainScreens : authScreens;
    return (
        <>
            {screens.map((item, index) => (
                <Screen key={`${index}`} {...item} />
            ))}
        </>
    );
};

const {Navigator, Screen} = createStackNavigator();

const MainNavigation = () => {
    const [isSplashScreen, setIsSplashScreen] = useState<boolean>(true);
    const {token} = useCredentialStore((state) => state);

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
                    routes(token)
                )}
            </Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
