
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddExerciseScreen from './screens/AddExerciseScreen';
import ExerciseHistoryScreen from './screens/ExerciseHistoryScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Add Exercise" component={AddExerciseScreen} />
      <Tab.Screen name="Exercise History" component={ExerciseHistoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
