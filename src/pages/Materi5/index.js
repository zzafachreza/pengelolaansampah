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

export default function Materi5({navigation}) {
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
          Cara daur ulang barang bekas
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Salah satu contohnya adalah plastik bekas detergen, sabun,
          minyak, molto, pewangi, susu dan lain – lain anda olah menjadi
          beberapa macam tas, dompet dengan ukuran yang bervariasi. Selain itu,
          anda juga dapat menggunakannya untuk membuat tempat pensil, taplak
          meja dan lain – lain.
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Bahan kardus bekas juga dapat anda manfaatkan untuk tempat
          buku, mainan pazzel, dan topi. Selain itu, anda juga dapat membuat
          miniatur rumah, mainan mobil – mobilan, robot, kapal, topeng, perahu
          dan lain – lain.
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {'\t\t\t\t'}Bahan kardus bekas juga dapat anda manfaatkan untuk tempat
          buku, mainan pazzel, dan topi. Selain itu, anda juga dapat membuat
          miniatur rumah, mainan mobil – mobilan, robot, kapal, topeng, perahu
          dan lain – lain.
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
            onPress={() => navigation.replace('Home')}
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
              Selesai
            </Text>
            <Icon name="check" type="font-awesome" color="black" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
