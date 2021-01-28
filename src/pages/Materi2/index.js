import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../../components/header';

export default function Materi2({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Header />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          opacity: 0.8,
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Montserrat-SemiBold',
            marginBottom: 10,
          }}>
          Jenis – Jenis Sampah
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontFamily: 'Nunito-Bold',
            marginBottom: 10,
          }}>
          Sampah Padat (Anorganik)
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Sampah anorganik adalah sampah yang terdiri atas
          bahan-bahan anorganik. Contoh bahan-bahan anorganik adalah bahan
          logam, plastik, kaca, karet, dan kaleng. Sifat sampah anorganik adalah
          tahan lama dan sukar membusuk.
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Sampah ini tidak mudah diuraikan oleh mikroorganisme
          tanah. Apabila dibuang sembarangan, sampah anorganik dapat menimbulkan
          pencemaran tanah.
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            padding: 20,
            // backgroundColor: 'yellow',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Materi3')}
            style={{
              backgroundColor: '#67CD7E',
              paddingHorizontal: 50,
              paddingVertical: 15,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                marginRight: 20,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Selanjutnya
            </Text>
            <Icon
              name="arrow-right"
              type="font-awesome"
              color="black"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
