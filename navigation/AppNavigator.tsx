// navigation/AppNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WebScreen from '../screens/WebScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Web"
        component={WebScreen}
        options={{title: 'Kasumil Blog'}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: '설정'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
