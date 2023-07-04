import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants';
import Login from '../screens/Auth/Login/Login';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
