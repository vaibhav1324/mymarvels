import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'constants/theme';
import {Feed} from 'screens/Feed';
import {Comics} from 'screens/Comics';
import {Characters} from 'screens/Characters';
import {Profile} from 'screens/Profile';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => {
    const {bottom} = useSafeAreaInsets();
    return (
        <Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName = 'book-outline';
                    if (route.name === 'Characters') {
                        iconName = 'people-outline';
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            lazy
            tabBarOptions={{
                labelStyle: {fontWeight: 'bold', fontSize: 13},
                adaptive: true,
                tabStyle: {height: 50},
                style: {
                    backgroundColor: 'black',
                    alignItems: 'center',
                    height: 60,
                    paddingVertical: 5,
                    paddingBottom: bottom + 30,
                },
                activeTintColor: colors.primary,
                inactiveTintColor: '#afafaf',
            }}
        >
            <Screen name="Characters" component={Characters} />
            <Screen name="Comics" component={Comics} />
        </Navigator>
    );
};

export default TabNavigator;
