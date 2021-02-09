import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

var whoosh = new Sound(
  require('../assets/suara.mp3'),
  Sound.MAIN_BUNDLE,
  (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
    );
  },
);

export default function header2({keterangan}) {
  const [speaker, setSepeaker] = useState(false);
  const saklar = (x) => {
    setSepeaker(x);
  };

  useEffect(() => {
    // alert('test');
    whoosh.play();
  }, []);

  return (
    <View
      style={{
        // flex: 1,
        //   backgroundColor: 'red',
        flexDirection: 'row',
      }}>
      <View
        style={
          {
            //   flex: 1,
            // backgroundColor: 'blue',
          }
        }>
        {!speaker ? (
          <TouchableOpacity
            onPress={() => {
              saklar(true);
              // alert('mute');
              // Pause the sound
              whoosh.pause();
            }}
            style={{
              // marginRight: 100,
              padding: 10,
              margin: 10,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#000',
              borderRadius: 10,
              opacity: 0.7,
            }}>
            <Icon
              name="volume-up"
              type="font-awesome"
              color="white"
              size={35}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              saklar(false);
              whoosh.play();
            }}
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
              color="white"
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
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 25,
            borderRadius: 10,
            color: '#FFF',
            backgroundColor: '#000',
            opacity: 0.7,
            padding: 20,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          GALLERY
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
