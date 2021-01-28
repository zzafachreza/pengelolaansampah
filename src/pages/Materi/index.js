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

export default function Materi({navigation}) {
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
          Pengertian Sampah
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Sampah merupakan material sisa yang tidak diinginkan
          setelah berakhirnya suatu proses. Sampah didefinisikan oleh manusia
          menurut derajat keterpakaiannya, dalam proses-proses alam sebenarnya
          tidak ada konsep sampah, yang ada hanya produk-produk yang dihasilkan
          setelah dan selama proses alam tersebut berlangsung. Akan tetapi
          karena dalam kehidupan manusia didefinisikan konsep lingkungan maka
          sampah dapat dibagi menurut jenis-jenisnya.
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
            onPress={() => navigation.navigate('Materi2')}
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
