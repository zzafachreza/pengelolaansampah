import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Home,
  Materi,
  Materi2,
  Materi3,
  Materi4,
  Materi5,
} from '../pages';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Materi"
        component={Materi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Materi2"
        component={Materi2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Materi3"
        component={Materi3}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Materi4"
        component={Materi4}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Materi5"
        component={Materi5}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
