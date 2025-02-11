import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackParams from './AuthStackParams';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export const AuthenticatedScreens = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="VirtualCard"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={Home} name="Home" />
    </AuthStack.Navigator>
  );
};
