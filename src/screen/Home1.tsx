import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

const image = {
  uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
};
const user = [
  {
    id: 1,
    name: 'Paradise resort',
    location: 'Labuan Bajo',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    price: '$300/night',
    descrition:
      'SearchBars are used to search or filter items. Use a SearchBar when the number of items directly impacts a users ability to find one of them.',
    fulladdress: 'Pakistan I-8 Islamabad',
  },
  {
    id: 2,
    name: 'Buntago',
    location: 'Labuan Bajo',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    price: '$150/night',
    descrition:
      'SearchBars are used to search or filter items. Use a SearchBar when the number of items directly impacts a users ability to find one of them.',
    fulladdress: 'Pakistan I-8 Islamabad',
  },
  {
    id: 3,
    name: 'Paradise',
    location: 'Labuan Bajo',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    price: '$250/night',
    descrition:
      'SearchBars are used to search or filter items. Use a SearchBar when the number of items directly impacts a users ability to find one of them.',
    fulladdress: 'Pakistan I-8 Islamabad',
  },
];
const Stack = createNativeStackNavigator();
const Home1 = ({navigation}: any) => {
  //   const dispatch = useDispatch();
  //   const getData = () => {
  //     dispatch(data(user));
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.maintext}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Movelogin')}>
              <Text style={[styles.text, {fontSize: 20, marginTop: 39}]}>
                Current Location
              </Text>
            </TouchableOpacity>
            <Text style={[styles.text, {fontSize: 26}]}>Labuan Bajo, INA</Text>
          </View>
          {/* <Image
            style={styles.tinyLogo}
            // source={require('../assets/bell-ring.png')}
          /> */}
        </View>
        <View
          style={{
            width: 300,
            height: 50,
            backgroundColor: '#f5f5f5',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 30,
            flexDirection: 'row',
          }}>
          <TextInput style={{width: '80%'}} placeholder={'Look for homestay'} />
          <TouchableOpacity>
            {/* <Image
              //   source={require('../assets/bell-ring.png')}
              style={{width: 30, height: 30, marginTop: 10}}
            /> */}
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.container1}>
        <View style={styles.text1}>
          <Text style={{fontSize: 20, color: 'black'}}>Hotel Near you</Text>
          <Text style={{fontSize: 15, color: 'blue', paddingTop: 5}}>
            View All
          </Text>
        </View>
        <View>
          <FlatList
            data={user}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <ImageBackground
                  borderRadius={10}
                  style={styles.imageback}
                  source={{uri: item.image}}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: 'white'}}>{item.location}</Text>
                  <Text style={{color: 'white'}}>{item.price}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        </View>
        <View style={styles.text1}>
          <Text style={{fontSize: 20, color: 'black'}}>Explore Places</Text>
          <Text style={{fontSize: 15, color: 'blue', paddingTop: 5}}>
            View All
          </Text>
        </View>
        <View>
          <FlatList
            data={user}
            renderItem={({item}) => (
              <ImageBackground
                borderRadius={10}
                style={styles.imageback2}
                source={{uri: item.image}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {item.name}
                </Text>
              </ImageBackground>
            )}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Home1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.4,
  },
  text: {
    color: 'white',

    backgroundColor: 'transparent',
    padding: 5,
    paddingLeft: 40,
  },
  container1: {
    flex: 0.65,
    backgroundColor: 'white',
    marginTop: -30,
    borderTopRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  maintext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinyLogo: {
    height: 20,
    width: 20,
  },
  text1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  imageback: {
    width: 150,
    height: 200,
    padding: 10,
    marginLeft: 10,

    justifyContent: 'flex-end',
  },
  imageback2: {
    width: 150,
    height: 120,
    padding: 10,
    marginLeft: 10,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    flex: 0.07,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
