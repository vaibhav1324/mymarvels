import React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../screens/landingPage';

const {Navigator, Screen} = createStackNavigator();
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                <Navigator>
                    <Screen name="Landing" component={LandingPage} />
                </Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default MainNavigation;
