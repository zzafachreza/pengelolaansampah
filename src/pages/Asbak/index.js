import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../../components/header';
import {ScrollView} from 'react-native-gesture-handler';

export default function Asbak({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
      <Header keterangan="Cara Membuat Asbak Dari Kaleng Bekas Minuman" />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <ScrollView horizontal>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* 1 */}
            <View
              style={{
                flex: 1,
                elevation: 2,
                width: 300,
                backgroundColor: '#FFF',
                borderRadius: 10,
                overflow: 'hidden',
                margin: 20,
              }}>
              <Image
                // resizeMode="contain"
                source={require('../../assets/as1.jpg')}
                style={{
                  width: '100%',
                  height: 180,
                  //   aspectRatio: 1,
                }}
              />
              <View
                style={{
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    // textAlign: 'center',
                  }}>
                  Langkah-langkah dalam membuat kerajinan tangan berupa asbak
                  dari kelang bekas
                </Text>
              </View>
            </View>
            {/* 2 */}
            <View
              style={{
                flex: 1,
                elevation: 2,
                width: 300,
                backgroundColor: '#FFF',
                borderRadius: 10,
                overflow: 'hidden',
                margin: 20,
              }}>
              <Image
                // resizeMode="contain"
                source={require('../../assets/as2.jpg')}
                style={{
                  width: '100%',
                  height: 180,
                  //   aspectRatio: 1,
                }}
              />
              <View
                style={{
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    // textAlign: 'center',
                  }}>
                  Potong sisi atas kaleng minuman bekas, kurang lebih 2cm dari
                  sisi atasnya.
                </Text>
              </View>
            </View>
            {/* 3 */}
            <View
              style={{
                flex: 1,
                elevation: 2,
                width: 300,
                backgroundColor: '#FFF',
                borderRadius: 10,
                overflow: 'hidden',
                margin: 20,
              }}>
              <Image
                // resizeMode="contain"
                source={require('../../assets/as3.jpg')}
                style={{
                  width: '100%',
                  height: 180,
                  //   aspectRatio: 1,
                }}
              />
              <ScrollView
                style={{
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    // textAlign: 'center',
                  }}>
                  Sesudah lepas dari sisi atasnya, sisi tubuh kaleng di potong
                  jadi 12 sisi dengan ukuran yang lebih kurang sama.
                </Text>
              </ScrollView>
            </View>
            {/* 4 */}
            <View
              style={{
                flex: 1,
                elevation: 2,
                width: 300,
                backgroundColor: '#FFF',
                borderRadius: 10,
                overflow: 'hidden',
                margin: 20,
              }}>
              <Image
                // resizeMode="contain"
                source={require('../../assets/as4.jpg')}
                style={{
                  width: '100%',
                  height: 180,
                  //   aspectRatio: 1,
                }}
              />
              <View
                style={{
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    // textAlign: 'center',
                  }}>
                  Kemudian untuk langkah terakhir pada tahap pembuatan kerajinan
                  tangan berupa asbak ini, setiap sisi yang telah di potong,
                  dilipat seperti pada misal di bawah ini.
                </Text>
              </View>
            </View>
            {/* 4a */}
            <View
              style={{
                flex: 1,
                elevation: 2,
                width: 300,
                backgroundColor: '#FFF',
                borderRadius: 10,
                overflow: 'hidden',
                margin: 20,
              }}>
              <Image
                // resizeMode="contain"
                source={require('../../assets/as5.jpg')}
                style={{
                  width: '100%',
                  height: 180,
                  //   aspectRatio: 1,
                }}
              />
              <View
                style={{
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    // textAlign: 'center',
                  }}></Text>
              </View>
            </View>

            {/* finish */}
            <View
              style={{
                flex: 1,
                elevation: 2,
                width: 300,
                backgroundColor: '#FFF',
                borderRadius: 10,
                overflow: 'hidden',
                margin: 20,
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
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    // textAlign: 'center',
                  }}>
                  akhirnya kerajinan tangan asbak yang terlihat dari depan
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
