import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const OnboardingScreen = ({navigation}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.images}>
        <View style={[styles.image1, {paddingLeft: 50}]}>
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            source={require('../assets/icons/abc.jpg')}
          />
          <Image
            style={{height: 80, width: 80, borderRadius: 10}}
            source={require('../assets/icons/abc.jpg')}
          />
        </View>
        <View style={styles.image1}>
          <Image
            style={{height: 80, width: 80, borderRadius: 10}}
            source={require('../assets/icons/abc.jpg')}
          />
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            source={require('../assets/icons/abc.jpg')}
          />
          <Image
            style={{height: 80, width: 80, borderRadius: 10}}
            source={require('../assets/icons/abc.jpg')}
          />
        </View>
        <View style={[styles.image1, {paddingLeft: 50}]}>
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              marginHorizontal: 10,
            }}
            source={require('../assets/icons/abc.jpg')}
          />
          <Image
            style={{height: 80, width: 80, borderRadius: 10}}
            source={require('../assets/icons/abc.jpg')}
          />
        </View>
      </View>
      <View style={styles.text}>
        <TouchableOpacity onPress={() => navigation.navigate('option')}>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Let,s Find Your Sweet & Dream Place
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
          Get the opportunity to stay that you dream of at an affordable price
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Bottom')}>
        <View>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
            Let,s Go
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  images: {
    flex: 0.5,

    transform: [{rotate: '-30deg'}],
    padding: 60,
  },
  text: {
    paddingTop: 25,
    flex: 0.35,
  },
  button: {
    flex: 0.1,
    backgroundColor: 'blue',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    flexDirection: 'row',

    padding: 10,
  },
});
