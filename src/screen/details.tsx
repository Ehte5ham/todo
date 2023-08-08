import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const image = {
  uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
};

const Details = ({navigation}: any) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <ImageBackground
          source={image}
          style={styles.image}
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              marginTop: 190,
              padding: 10,
              fontWeight: 'bold',
            }}>
            paradise Resort
          </Text>
          <Text style={{color: 'white', fontSize: 15, padding: 10}}>
            Pakistan I-8 Islamabad
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.container2}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text1}>About Us</Text>
          <Text style={{fontSize: 15}}>
            SearchBars are used to search or filter items. Use a SearchBar when
            the number of items directly impacts a user's ability to find one of
            them.
          </Text>
          <Text style={styles.text1}>Services & Facilities</Text>
          <Text style={{fontSize: 15}}>
            The library has specified dedicated steps for each platform. Please
            follow their installation guide in order to properly use icon fonts.
            If you don't want to install vector icons, you can use
            babel-plugin-optional-require to opt-out. If you use Expo, you don't
            need to install vector icons. But if you have a babel.config.js or
            .babelrc file, make sure that it includes babel-preset-expo. To get
            smaller bundle size by excluding modules you don't use, you can use
            our optional babel plugin. The plugin automatically rewrites the
            import statements so that only the modules you use are imported
            instead of the whole library. Add react-native-paper/babel to the
            plugins section in your babel.config.js for production environment.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.container3}>
        <View>
          <Text style={{fontSize: 15}}>Price estimate</Text>
          <Text style={{fontSize: 25}}>
            $1480<Text style={{fontSize: 15}}>/night</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Password')}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Reserve Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container1: {
    flex: 0.5,
  },
  container2: {
    flex: 0.4,

    padding: 15,
  },
  image: {
    flex: 1,
  },
  container3: {
    flex: 0.1,
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  box: {
    width: 140,
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
