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

export default function Latihan({navigation}) {
  const [nilai, setNilai] = useState(0);
  const [satu, setSatu] = useState(true);
  const [dua, setDua] = useState(false);
  const [tiga, setTiga] = useState(false);
  const [empat, setEmpat] = useState(false);
  const [lima, setLima] = useState(false);
  const [enam, setEnam] = useState(false);
  const [tujuh, setTujuh] = useState(false);
  const [delapan, setDelapan] = useState(false);
  const [sembilan, setSembilan] = useState(false);
  const [sepuluh, setSepuluh] = useState(false);
  const [hasil, setHasil] = useState(false);

  const Jawaban = ({no, soal, a, b, c, d, betul}) => {
    const jawab = (isi) => {
      if (isi === betul) {
        setNilai(nilai + 1);
      } else {
        setNilai(nilai + 0);
      }

      if (no == '1') {
        setSatu(false);
        setDua(true);
      } else if (no == '2') {
        setDua(false);
        setTiga(true);
      } else if (no == '3') {
        setTiga(false);
        setEmpat(true);
      } else if (no == '4') {
        setEmpat(false);
        setLima(true);
      } else if (no == '5') {
        setLima(false);
        setEnam(true);
      } else if (no == '6') {
        setEnam(false);
        setTujuh(true);
      } else if (no == '7') {
        setTujuh(false);
        setDelapan(true);
      } else if (no == '8') {
        setDelapan(false);
        setSembilan(true);
      } else if (no == '9') {
        setSembilan(false);
        setSepuluh(true);
      } else if (no == '10') {
        setSepuluh(false);
        setHasil(true);
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
            {soal}
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

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Header keterangan="LATIHAN" />
      {/* <Text>{nilai}</Text> */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          opacity: 0.8,
          padding: 10,
        }}>
        {satu && (
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
        )}

        {dua && (
          <Jawaban
            no="2"
            soal="Sampah digolongkan menjadi..."
            a="sampah alam"
            b="sampah abiotik dan biotik"
            c="sampah organik dan anorganik"
            d="sampah lingkungan"
            betul="sampah organik dan anorganik"
          />
        )}

        {tiga && (
          <Jawaban
            no="3"
            soal="Sampah yang sulit di uraikan oleh mikro organisme disebut..."
            a="sampah anorganik"
            b="sampah organik"
            c="sampah masyarakat"
            d="sampah plastik"
            betul="sampah anorganik"
          />
        )}

        {empat && (
          <Jawaban
            no="4"
            soal="Plastik termasuk jenis dari sampah ..."
            a="organik"
            b="anorganik"
            c="harum"
            d="segar"
            betul="anorganik"
          />
        )}

        {lima && (
          <Jawaban
            no="5"
            soal="Sampah organik manakah yang mempunyai manfaat untuk
            dijadikan ransel ..."
            a="karet"
            b="plastik"
            c="kaleng"
            d="enceng gondok"
            betul="enceng gondok"
          />
        )}
        {enam && (
          <Jawaban
            no="6"
            soal="Manusia memanfaatkan sampah organik untuk dijadikan..."
            a="pupuk"
            b="sdimakan"
            c="mainan"
            d="kegiatan medis"
            betul="pupuk"
          />
        )}
        {tujuh && (
          <Jawaban
            no="7"
            soal="Dedaunan termasuk jenis dari sampah..."
            a="organik"
            b="anorganik"
            c="harum"
            d="segar"
            betul="organik"
          />
        )}

        {delapan && (
          <Jawaban
            no="8"
            soal="Kaleng termasuk jenis dari sampah..."
            a="organik"
            b="anorganik"
            c="harum"
            d="segar"
            betul="anorganik"
          />
        )}

        {sembilan && (
          <Jawaban
            no="9"
            soal="Cara untuk menjaga lingkungan adalah ..."
            a="buang sampah sembarangan"
            b="buang sampah di sungai"
            c="buang sampah bukan di pembuangan sampah"
            d="buang sampah pada tempatnya"
            betul="buang sampah pada tempatnya"
          />
        )}

        {sepuluh && (
          <Jawaban
            no="10"
            soal="Jenis sampah yang bisa dijadikan untuk pupuk tumbuhan ..."
            a="organik"
            b="anorganik"
            c="harum"
            d="segar"
            betul="organik"
          />
        )}

        {hasil && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Nunito-Bold',
              }}>
              Nilai Anda Adalah :
            </Text>
            <Text
              style={{
                fontSize: 100,
                fontFamily: 'Nunito-Bold',
              }}>
              {nilai}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
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
                  Kembali
                </Text>
                <Icon name="home" type="font-awesome" color="black" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
