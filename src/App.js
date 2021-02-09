import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes';
import {LogBox, StatusBar} from 'react-native';
import Orientation from 'react-native-orientation';

export default function App() {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#64AECD" barStyle="light-content" />
      <Router />
    </NavigationContainer>
  );
}
