import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home() {
  const [speaker, setSepeaker] = useState(false);
  const saklar = (x) => {
    setSepeaker(x);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <View
        style={{
          flex: 1,
          //   backgroundColor: 'red',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'blue',
          }}>
          {!speaker ? (
            <TouchableOpacity
              onPress={() => saklar(true)}
              style={{
                // marginRight: 100,
                padding: 10,
                margin: 10,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'yellow',
              }}>
              <Icon
                name="volume-up"
                type="font-awesome"
                color="#65C5D8"
                size={35}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => saklar(false)}
              style={{
                // marginRight: 100,
                padding: 10,
                margin: 10,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'yellow',
              }}>
              <Icon
                name="volume-off"
                type="font-awesome"
                color="#65C5D8"
                size={35}
              />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flex: 3,
            // backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Montserrat-Regular',
            }}>
            Aplikasi Pengelolaan Sampah
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 20,
          elevation: 1,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#67CD7E',
            width: '50%',
            height: 50,
            paddingLeft: 10,
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            marginVertical: 5,
            elevation: 1,
          }}>
          <Icon name="trash-o" type="font-awesome" color="white" size={20} />
          <Text
            style={{
              left: 10,
              color: 'white',
              fontSize: 20,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Pengelolaan Sampah
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#65C5D8',
            width: '50%',
            height: 50,
            paddingLeft: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            marginVertical: 5,
            elevation: 1,
          }}>
          <Icon name="pencil" type="font-awesome" color="white" size={20} />
          <Text
            style={{
              left: 10,
              color: 'white',
              fontSize: 20,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Latihan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#67CD7E',
            width: '50%',
            height: 50,
            paddingLeft: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            marginVertical: 5,
            elevation: 1,
          }}>
          <Icon name="desktop" type="font-awesome" color="white" size={20} />
          <Text
            style={{
              left: 10,
              color: 'white',
              fontSize: 20,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Tutorial
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#65C5D8',
            width: '50%',
            height: 50,
            paddingLeft: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            elevation: 1,
            borderRadius: 10,
            flexDirection: 'row',
            marginVertical: 5,
          }}>
          <Icon name="image" type="font-awesome" color="white" size={20} />
          <Text
            style={{
              left: 10,
              color: 'white',
              fontSize: 20,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Gallery
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
