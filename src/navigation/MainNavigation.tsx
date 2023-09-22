import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useCredentialStore } from 'stores/useCredentialStore';

import 'react-native-gesture-handler';

import { ROUTES } from 'constants/routes';

import Login from 'screens/Login';
import Tabs from './TabNavigation';
import SignUp from 'screens/SignUp';
import Welcome from 'screens/Welcome';
import SplashScreen from 'screens/SplashScreen';

export const noHeader = { header: () => null };

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
] as const;

const mainScreens = [
  {
    name: ROUTES.HOME,
    component: Tabs,
    options: noHeader,
  },
] as const;

const routes = (token?: string) => {
  const screens = Boolean(token) ? mainScreens : authScreens;

  return (
    <>
      {screens.map((item, index) => (
        <Screen key={`${index}-${item.name}`} {...item} />
      ))}
    </>
  );
};

const { Navigator, Screen } = createStackNavigator();

const MainNavigation = () => {
  const { token } = useCredentialStore((state) => state);

  const [isSplashScreen, setIsSplashScreen] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
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
