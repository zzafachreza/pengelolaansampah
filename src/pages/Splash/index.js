import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1500);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri:
            'https://waste4change.com/official/2.8.assets/img/icons/waste-type/accepted.png',
        }}
        style={{
          width: 123,
          height: 120,
        }}
      />
      <Text
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 25,
          color: 'black',
          //   color: '#65C5D8',
        }}>
        Aplikasi Pengelolaan Sampah
      </Text>
      <ActivityIndicator color="#67CD7E" size="large" />
    </View>
  );
}

const styles = StyleSheet.create({});
