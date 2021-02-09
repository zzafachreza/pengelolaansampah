import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Animated,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';

import Header from '../../components/header';

export default function Home({navigation}) {
  const isFocused = useIsFocused();
  const top = new Animated.Value(0.5);
  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 0.6,
          duration: 1000,
          // delay: 2000,
        }),
        Animated.timing(top, {
          toValue: 0.5,
          duration: 1000,
        }),
      ]),
      {
        iterations: 50,
      },
    ).start();
  };
  isFocused ? animasi() : null;

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Header keterangan="Aplikasi Pengelolaan Sampah" />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
            // elevation: 1,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Materi')}
            style={{
              margin: 5,
            }}>
            <Image
              source={require('../../assets/sampah.png')}
              style={{
                width: 300,
                height: 50,
                borderRadius: 10,
                width: 300,
                overflow: 'hidden',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Latihan')}
            style={{
              margin: 5,
            }}>
            <Image
              source={require('../../assets/latihan.png')}
              style={{
                width: 300,
                height: 50,
                borderRadius: 10,
                width: 300,
                overflow: 'hidden',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Tutorial')}
            style={{
              margin: 5,
            }}>
            <Image
              source={require('../../assets/tutorial.png')}
              style={{
                width: 300,
                height: 50,
                borderRadius: 10,
                width: 300,
                overflow: 'hidden',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Gallery')}
            style={{
              margin: 5,
              borderRadius: 10,
              width: 300,
              overflow: 'hidden',
            }}>
            <Image
              source={require('../../assets/gallery.png')}
              style={{
                width: 300,
                height: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Animated.Image
            source={require('../../assets/karakter.png')}
            style={
              (styles.karakter,
              {
                transform: [{scale: top}],
              })
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  karakter: {
    width: 250,
    height: 300,
  },
});
