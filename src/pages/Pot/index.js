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

export default function Pot({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
      <Header keterangan="Cara Membuat Pot Dari Botol Plastik" />
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
            <View
              style={{
                flex: 1,
                width: 300,
                elevation: 2,
                backgroundColor: '#FFF',
                borderRadius: 10,
                overflow: 'hidden',
                margin: 20,
                // justifyContent: 'center',
                // alignItems: 'center',
              }}>
              {/*bahan  */}
              <View
                style={{
                  padding: 5,
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 16,
                    textAlign: 'center',
                  }}>
                  mulai dengan menyiapkan bahan-bahan dan alat yang di butuhkan
                </Text>
                <View
                  style={{
                    flex: 1,
                    height: 10,
                    marginBottom: 10,
                    // flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: 'gray',
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginBottom: 10,
                    alignItems: 'flex-start',
                  }}>
                  <Icon
                    name="circle"
                    color="gray"
                    type="font-awesome"
                    size={12}
                  />

                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 14,
                      left: 10,
                    }}>
                    Siapkan Botol Plastik bekas
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginBottom: 10,
                  }}>
                  <Icon
                    name="circle"
                    color="gray"
                    type="font-awesome"
                    size={12}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 14,
                      left: 10,
                    }}>
                    Piringan CD
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginBottom: 10,
                  }}>
                  <Icon
                    name="circle"
                    color="gray"
                    type="font-awesome"
                    size={12}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 14,
                      left: 10,
                    }}>
                    Cat Kayu Dengan Warna Pilihan Kamu Sendiri
                  </Text>
                </View>

                <View
                  style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <Icon
                    name="circle"
                    color="gray"
                    type="font-awesome"
                    size={12}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 14,
                      left: 10,
                    }}>
                    Pemotong, Seperti Cutter dan Gunting
                  </Text>
                </View>
                <View
                  style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}>
                  <Icon
                    name="circle"
                    color="gray"
                    type="font-awesome"
                    size={12}
                  />
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 14,
                      left: 10,
                    }}>
                    Lem (disarankan lem tembak)
                  </Text>
                </View>
              </View>
            </View>
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
                source={require('../../assets/po1.jpg')}
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
                  Pertama, silahkan potong botol plastik bekas, untuk panjangnya
                  sesuai keinginan kamu saja.
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
                source={require('../../assets/po1.jpg')}
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
                  Silahkan membuat bentuk yang lebih kreatif. atau serperti yang
                  terlihat di gambar. Jika mempunyai ide-ide lain bisa di coba
                  sendiri.
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
                source={require('../../assets/po1.jpg')}
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
                  Selanjutnya, tempelkan dengan lem piringan CD pada bagian atas
                  potongan botol plastik. Pastikan lem anda kuat dan kokoh
                </Text>
              </View>
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
                source={require('../../assets/po1.jpg')}
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
                  Gunakan cat pada kedua potongan botol untuk memberi warna agar
                  lebih menarik
                </Text>
              </View>
            </View>

            {/* 5 */}
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
                source={require('../../assets/po1.jpg')}
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
                  Terakhir, silahkan di jemur atau di biarkan hingga kering.
                </Text>
              </View>
            </View>

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
                source={require('../../assets/tut3.jpg')}
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
                  Selesai, pot cantik keren sudah jadi, sekarang kamu bisa
                  memberinya bunga alami ataupun bunga hiasan.
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
