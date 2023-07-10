import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import {HomeScreen, Login, Notification, Onboarding} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../screens/Auth/profile/Profile';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = ROUTES.ON_BOARDING;
  } else {
    routeName = ROUTES.LOGIN;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.ON_BOARDING} component={Onboarding} />
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        <Stack.Screen name={ROUTES.NOTIFICATION} component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
