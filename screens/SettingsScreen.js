// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, STYLES } from '../styles';

const SettingsScreen = () => {
  const [selectedUnit, setSelectedUnit] = useState('km');

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <Text style={STYLES.heading}>Settings</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            ...STYLES.button,
            backgroundColor: selectedUnit === 'km' ? COLORS.primary : COLORS.secondary,
            marginRight: 10,
          }}
          onPress={() => handleUnitChange('km')}
        >
          <Text style={STYLES.buttonText}>Kilometers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...STYLES.button,
            backgroundColor: selectedUnit === 'miles' ? COLORS.primary : COLORS.secondary,
          }}
          onPress={() => handleUnitChange('miles')}
        >
          <Text style={STYLES.buttonText}>Miles</Text>
        </TouchableOpacity>
      </View>
      <Text style={STYLES.label}>Selected Unit: {selectedUnit}</Text>
    </View>
  );
};

export default SettingsScreen;
