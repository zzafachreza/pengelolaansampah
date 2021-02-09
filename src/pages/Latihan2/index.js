import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../../components/header';

const Jawaban = ({no, soal, a, b, c, d, betul}) => {
  const [nilai, setNilai] = useState(0);

  const jawab = (isi) => {
    if (isi === betul) {
      alert('betul');
      setNilai(nilai + 1);
    } else {
      setNilai(nilai + 0);
    }
  };

  return (
    <>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'Montserrat-SemiBold',
          marginBottom: 10,
          textAlign: 'right',
        }}>
        Latihan Soal {no}
      </Text>
      <View
        style={{
          flex: 1,
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontSize: 24,
            textAlign: 'justify',

            fontFamily: 'Montserrat-Regular',
          }}>
          {soal} {nilai}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          // padding: 20,padding
          paddingHorizontal: 20,
          flexDirection: 'row',
          // backgroundColor: 'yellow',
        }}>
        <TouchableOpacity
          onPress={() => jawab(a)}
          style={{
            backgroundColor: '#D1E36B',
            width: 250,
            paddingVertical: 15,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,

              fontFamily: 'Montserrat-SemiBold',
            }}>
            A. {a}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => jawab(c)}
          style={{
            backgroundColor: '#D1E36B',
            width: 250,
            paddingVertical: 15,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,

              fontFamily: 'Montserrat-SemiBold',
            }}>
            C. {c}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          // padding: 20,
          paddingHorizontal: 20,
          flexDirection: 'row',
          // backgroundColor: 'yellow',
        }}>
        <TouchableOpacity
          onPress={() => jawab(b)}
          style={{
            backgroundColor: '#D1E36B',
            width: 250,
            paddingVertical: 15,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,

              fontFamily: 'Montserrat-SemiBold',
            }}>
            B. {b}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => jawab(d)}
          style={{
            backgroundColor: '#D1E36B',
            width: 250,
            paddingVertical: 15,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              textAlign: 'left',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            D. {d}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default function Latihan({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Header keterangan="LATIHAN" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          opacity: 0.8,
          padding: 10,
        }}>
        <Jawaban
          no="1"
          soal="Sampah yang mudah diuraikan oleh mikro organisme
disebut.."
          a="sampah anorganik"
          b="sampah organik"
          c="sampah masyarakat"
          d="sampah plastik"
          betul="sampah organik"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
