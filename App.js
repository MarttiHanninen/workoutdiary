// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AddExerciseScreen from './screens/AddExerciseScreen';
import ExerciseHistoryScreen from './screens/ExerciseHistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const ExerciseHistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExerciseHistory" component={ExerciseHistoryScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
        <Stack.Screen name="ExerciseHistoryStack" component={ExerciseHistoryStack} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
