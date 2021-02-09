import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../../components/header';

export default function Gallery4({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/4.png')}
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Header keterangan="Gallery" tipe="Gallery" />
      <View
        style={{
          flex: 1,
          //   backgroundColor: 'black',
          borderRadius: 10,
          //   marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          //   opacity: 0.8,
          //   padding: 10,
        }}>
        {/* <Image
          source={require('../../assets/1.png')}
          style={{
            width: 200,
            height: 200,
          }}
        /> */}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Gallery5')}
          style={{
            backgroundColor: '#FFF',
            paddingHorizontal: 10,
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
