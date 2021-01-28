import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Header from '../../components/header';

export default function Home({navigation}) {
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
          flex: 4,
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
              width: 400,
              height: 50,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            margin: 5,
          }}>
          <Image
            source={require('../../assets/latihan.png')}
            style={{
              width: 400,
              height: 50,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            margin: 5,
          }}>
          <Image
            source={require('../../assets/tutorial.png')}
            style={{
              width: 400,
              height: 50,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            margin: 5,
          }}>
          <Image
            source={require('../../assets/gallery.png')}
            style={{
              width: 400,
              height: 50,
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
