import React, { ComponentProps } from 'react';

import { colors } from 'constants/theme';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Comics from 'screens/Comics';
import Characters from 'screens/Characters';

import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { Navigator, Screen } = createBottomTabNavigator();

type ScreenOptions = ComponentProps<typeof Navigator>['screenOptions'];

const screenOptions: ScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName = 'book-outline';

    if (route.name === 'Characters') {
      iconName = 'people-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const getTabBarOptions = (bottom: number): BottomTabBarOptions => ({
  labelStyle: { fontWeight: 'bold', fontSize: 13 },
  adaptive: true,
  tabStyle: { height: 50 },
  style: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: 60,
    paddingVertical: 5,
    paddingBottom: bottom + 30,
  },
  activeTintColor: colors.primary,
  inactiveTintColor: '#afafaf',
});

const TabNavigator = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Navigator
      lazy
      screenOptions={screenOptions}
      tabBarOptions={getTabBarOptions(bottom)}
    >
      <Screen name="Characters" component={Characters} />
      <Screen name="Comics" component={Comics} />
    </Navigator>
  );
};

export default TabNavigator;
