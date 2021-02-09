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

export default function Dompet({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}>
      {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
      <Header keterangan="Cara Membuat Dompet Dari Bungkus Kopi" />
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
                    Bungkus kopi bekas sebanyak-banyaknya (dalam tutorial ini
                    membutuhkan kurang lebih 100 bungkus kopi)
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
                    Benang dan jarum jahit.
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
                    Gunting.
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
                    Ketekunan.
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
                source={require('../../assets/do1.jpg')}
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
                  Gunting bagian atas dan bawah bungkus kopi. Untuk hasil yang
                  cantik dan bagus, sebaiknya bungkus kopi tidak beraneka ragam
                  alias satu jenis. Dan memotongnya juga harus di samakan antara
                  satu dan lainnya. 
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
                source={require('../../assets/do2.jpg')}
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
                  Lipat bagian kanan dan kiri bungkusan kopi, sehingga bertemu
                  bagian tengah seperti gambar berikut
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
                source={require('../../assets/do3.jpg')}
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
                  }}></Text>
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
                source={require('../../assets/do4.jpg')}
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
                  Setelah selesai melipat semua bungkus kopi, sekarang waktunya
                  untuk mengaitkan (anyaman) satu persatu bungkus kopi sehingga
                  terbentuk seperti di gambar. (semakin banyak susunan bungkus
                  kopi maka hasilnya semakin besar)
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
                source={require('../../assets/do4a.jpg')}
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
                source={require('../../assets/do5.jpg')}
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
                  Satukan antara rakitan satu dengan lainnya sehingga menjadi
                  gambar sebagai berikut.
                </Text>
              </View>
            </View>
            {/* 5a */}
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
                source={require('../../assets/do6.jpg')}
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
            {/* 5b */}
            {/* 5a */}
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
                source={require('../../assets/do7.jpg')}
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
            {/* 6 */}
            {/* 5a */}
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
                source={require('../../assets/do8.jpg')}
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
                  Kemudian terulah merajut hingga membentuk dompet wanita cantik
                  yang kamu inginkan.
                </Text>
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
                source={require('../../assets/tut2.jpg')}
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
                  Berikut ini contoh gambar dompet yang sudah jadi
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
