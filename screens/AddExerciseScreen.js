import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, Alert, ScrollView } from 'react-native';
import { COLORS, STYLES } from '../styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const ExerciseHistoryScreen = ({ navigation, route }) => {
  const [workouts, setWorkouts] = useState([]);
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (route.params && route.params.newExercise) {
      const newExercise = route.params.newExercise;
      setWorkouts([...workouts, newExercise]);
    }
  }, [route.params]);

  const addExercise = () => {
    if (sportType.trim() === '' || distance.trim() === '' || duration.trim() === '' || selectedDate.trim() === '') {
      Alert.alert('Invalid Input', 'Please fill in all fields.');
      return;
    }

    const newExercise = {
      id: workouts.length + 1,
      sportType: sportType.trim(),
      distance: parseFloat(distance.trim()),
      duration: parseInt(duration.trim()),
      date: selectedDate,
    };

    setWorkouts([...workouts, newExercise]);

    setSportType('');
    setDistance('');
    setDuration('');
    setSelectedDate('');
  };

  const totalDistance = workouts.reduce((total, workout) => total + workout.distance, 0);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <Text style={STYLES.heading}>Exercise History</Text>
      <View style={{ marginBottom: 10 }}>
        <Text style={STYLES.label}>Sport Type</Text>
        <MaterialIcons name="directions-run" size={24} color="black" />
        <TextInput
          style={STYLES.input}
          value={sportType}
          onChangeText={setSportType}
          placeholder="Enter Sport Type"
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={STYLES.label}>Distance (km)</Text>
        <MaterialCommunityIcons name="map-marker-distance" size={24} color="black" />
        <TextInput
          style={STYLES.input}
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
          placeholder="Enter Distance"
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={STYLES.label}>Duration (minutes)</Text>
        <FontAwesome6 name="clock" size={24} color="black" />
        <TextInput
          style={STYLES.input}
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
          placeholder="Enter Duration"
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={STYLES.label}>Date</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{ [selectedDate]: { selected: true } }}
          theme={{
            calendarBackground: COLORS.primary,
            selectedDayBackgroundColor: COLORS.secondary,
            selectedDayTextColor: '#ffffff',
            todayTextColor: COLORS.secondary,
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            arrowColor: '#ff9900',
            monthTextColor: COLORS.secondary,
            textDayFontWeight: '600',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
      <Button title="Add Exercise" onPress={addExercise} color={COLORS.primary} />
      <Text style={{ marginTop: 10 }}>Total Distance: {totalDistance} km</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <Text style={STYLES.label}>Sport Type: {item.sportType}</Text>
            <Text style={STYLES.text}>Distance: {item.distance} km</Text>
            <Text style={STYLES.text}>Duration: {item.duration} minutes</Text>
            <Text style={STYLES.text}>Date: {item.date}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default ExerciseHistoryScreen;
