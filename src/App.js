import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes';
import {LogBox} from 'react-native';
import Orientation from 'react-native-orientation';

export default function App() {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
