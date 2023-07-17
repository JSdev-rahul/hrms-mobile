import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import {
  About,
  BankDetails,
  HomeScreen,
  LeaveRequest,
  Leaves,
  Login,
  MyProfile,
  Notification,
  Onboarding,
  Profile,
  Slips,
} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <Stack.Screen name={ROUTES.LEAVES} component={Leaves} />
        <Stack.Screen name={ROUTES.MY_PROFILE} component={MyProfile} />
        <Stack.Screen name={ROUTES.LEAVE_REQUEST} component={LeaveRequest} />
        <Stack.Screen name={ROUTES.BANK_DETAILS} component={BankDetails} />
        <Stack.Screen name={ROUTES.SLIPS} component={Slips} />
        <Stack.Screen name={ROUTES.ABOUT} component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
