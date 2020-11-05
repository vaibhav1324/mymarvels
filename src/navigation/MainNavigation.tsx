import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'screens/Welcome';
import SplashScreen from 'screens/SplashScreen';

const ROUTES = Object.freeze({
    SPLASH: 'Splash',
    WELCOME: 'Welcome',
});

const routes = () => <Screen name={ROUTES.WELCOME} component={WelcomeScreen} />;

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
            <SafeAreaView style={{flex: 1}}>
                <Navigator>
                    {isSplashScreen ? (
                        <Screen
                            name={ROUTES.SPLASH}
                            component={SplashScreen}
                            options={{header: () => null}}
                        />
                    ) : (
                        routes()
                    )}
                </Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default MainNavigation;
