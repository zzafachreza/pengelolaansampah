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

export default function Materi3({navigation}) {
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
          Sampah Basah (Organik)
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Sampah organik adalah sampah yang terdiri atas bahan-bahan
          organik. Sifat sampah organik adalah tidak tahan lama dan cepat
          membusuk. Biasanya sampah jenis ini berasal dari makhluk hidup.
          Contohnya adalah sayur-sayuran, buah-buah yang membusuk, sisa nasi,
          daun, dan sebagainya.
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Sampah organik mudah diuraikan mikroorganisme tanah. Hanya
          saja jenis sampah akan menimbulkan bau kurang sedap jika tidak
          dikelola dengan baik.
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
            onPress={() => navigation.navigate('Materi4')}
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
