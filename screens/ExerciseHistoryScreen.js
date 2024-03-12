import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

const ExerciseHistoryScreen = ({ route }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (route.params && route.params.newExercise) {
      const newExercise = route.params.newExercise;
      setWorkouts([...workouts, newExercise]);
    }
  }, [route.params]);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <Text>Exercise History</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Sport Type: {item.sportType}</Text>
            <Text>Distance: {item.distance} km</Text>
            <Text>Duration: {item.duration} minutes</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default ExerciseHistoryScreen;
