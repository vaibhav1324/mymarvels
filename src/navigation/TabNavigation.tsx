import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'constants/theme';
import {Feed} from 'screens/Feed';
import {Comics} from 'screens/Comics';
import {Characters} from 'screens/Characters';
import {Profile} from 'screens/Profile';
import {SafeAreaView} from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <>
            <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} />
            <Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName = 'reader-outline';

                        if (route.name === 'Comics') {
                            iconName = 'book-outline';
                        }
                        if (route.name === 'Characters') {
                            iconName = 'people-outline';
                        }
                        if (route.name === 'Profile') {
                            iconName = 'person-outline';
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                lazy
                tabBarOptions={{
                    labelStyle: {fontWeight: 'bold'},
                    adaptive: true,
                    tabStyle: {height: 50},
                    style: {
                        backgroundColor: 'black',
                        alignItems: 'center',
                        height: 60,
                        paddingVertical: 5,
                    },
                    activeTintColor: colors.primary,
                    inactiveTintColor: 'white',
                }}
            >
                <Screen name="Feed" component={Feed} />
                <Screen name="Comics" component={Comics} />
                <Screen name="Characters" component={Characters} />
                <Screen name="Profile" component={Profile} />
            </Navigator>
            <SafeAreaView style={{flex: 0, backgroundColor: 'black'}} />
        </>
    );
};

export default TabNavigator;
