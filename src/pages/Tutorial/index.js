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

export default function Tutorial({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
      <Header keterangan="Tutorial" />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Dompet')}
          style={{
            flex: 1,
            elevation: 2,
            backgroundColor: '#FFF',
            borderRadius: 10,
            overflow: 'hidden',
            margin: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Image
            // resizeMode="contain"
            source={require('../../assets/tut2.jpg')}
            style={{
              width: '100%',
              height: 180,
              //   aspectRatio: 1,
            }}
          />
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Membuat Dompet Dari Bungkus Kopi
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pot')}
          style={{
            flex: 1,
            elevation: 2,
            backgroundColor: '#FFF',
            borderRadius: 10,
            overflow: 'hidden',
            margin: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Image
            // resizeMode="contain"
            source={require('../../assets/tut3.jpg')}
            style={{
              width: '100%',
              height: 180,
              //   aspectRatio: 1,
            }}
          />
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Membuat Pot Dari Botol Plastik
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Asbak')}
          style={{
            flex: 1,
            elevation: 2,
            backgroundColor: '#FFF',
            borderRadius: 10,
            overflow: 'hidden',
            margin: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Image
            // resizeMode="contain"
            source={require('../../assets/tut1.jpg')}
            style={{
              width: '100%',
              height: 180,
              //   aspectRatio: 1,
            }}
          />
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Membuat Asbak Dari Kaleng Bekas Minuman
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
