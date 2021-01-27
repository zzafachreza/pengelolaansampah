import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Orientation from 'react-native-orientation';

export default function Splash() {
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);
  return (
    <View>
      <Text>ini Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
