import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const YourComponent = () => {
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      error => {
        console.log(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <View>
      <Text>Your React Native Component</Text>
      <TouchableOpacity onPress={getCurrentLocation}>
        <Text>Get Current Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourComponent;
