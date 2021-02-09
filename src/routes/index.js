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
  Gallery,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Tutorial,
  Dompet,
  Pot,
  Asbak,
  Latihan,
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

      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gallery2"
        component={Gallery2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gallery3"
        component={Gallery3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gallery4"
        component={Gallery4}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Gallery5"
        component={Gallery5}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Dompet"
        component={Dompet}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Pot"
        component={Pot}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Asbak"
        component={Asbak}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Latihan"
        component={Latihan}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
