import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
// import {DrawerItem} from 'react-native-vector-icons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Feed from './Feed';
import Article from './Settings';
import About from './About';
import Share from './share';
import Aboutus from './Aboutus';
import OnboardingScreen from './onboarding';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const Drawer = createDrawerNavigator();
const read = async () => {
  const storedEmail = await AsyncStorage.getItem('email');
};
const CustomDrawer = (props: any) => {
  const [email, setemail] = useState<string>('');
  const read = async () => {
    const storedEmail = await AsyncStorage.getItem('email');
    setemail(storedEmail || '');
  };

  useEffect(() => {
    read();
  }, []);
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      Alert.alert('Success', 'Logged out successfully!');
      console.log('clear');
      props.navigation.navigate('Login');
    } catch (error) {
      // Handle any potential errors here
      console.log(error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        style={{width: 290, height: 190, marginBottom: 10, marginTop: -10}}
        source={require('../assets/pics/curve22.png')}>
        <View
          style={{
            padding: 30,
            // backgroundColor: '#8791F8',
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            // marginBottom: 10,
          }}>
          <View>
            <Image
              source={require('../assets/pics/header.jpg')}
              style={{width: 70, height: 70, borderRadius: 35}}></Image>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Muhammad Ehtisham
            </Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{email}</Text>
          </View>
        </View>
      </ImageBackground>
      <DrawerItemList {...props} />
      <View style={{borderBottomWidth: 1, borderBottomColor: '#8791F8'}}></View>
      <View>
        <View style={{marginTop: 20}}>
          {/* <Text style={{fontSize: 30}}>{count}</Text>
      <Text>{data}</Text>
      <Button title="Increment" onPress={() => setcount(count + 1)} />
      <Button title="Decrement" onPress={() => setcount(count - 1)} /> */}

          <TouchableOpacity
            onPress={handleLogout}
            style={{
              width: 90,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold'}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const Home = ({navigation}: any) => {
  // const [count, setcount] = useState(0);
  // const [data, setdata] = useState('');
  // useEffect(() => {
  //   console.log('UseEffect', count);
  //   if (count > 25) {
  //     setdata('You Exceeded Age limit');
  //   } else {
  //     setdata('');
  //   }
  // });

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      Alert.alert('Success', 'Logged out successfully!');
      console.log('clear');
      navigation.navigate('Login');
    } catch (error) {
      // Handle any potential errors here
      console.log(error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   <Text style={{fontSize: 30}}>{count}</Text>
    //   <Text>{data}</Text>
    //   <Button title="Increment" onPress={() => setcount(count + 1)} />
    //   <Button title="Decrement" onPress={() => setcount(count - 1)} />
    //   <TouchableOpacity
    //     onPress={handleLogout}
    //     style={{
    //       flex: 0.06,
    //       backgroundColor: 'red',
    //       width: 90,
    //       borderRadius: 10,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}>
    //     <Text
    //       style={{
    //         color: 'white',
    //         fontSize: 20,
    //         fontWeight: 'bold',

    //         alignItems: 'center',
    //       }}>
    //       Log Out
    //     </Text>
    //   </TouchableOpacity>
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          // backgroundColor: '#c6cbef',
        },
      }}>
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      <Drawer.Screen
        name="onboarding"
        component={OnboardingScreen}></Drawer.Screen>
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#8791F8',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Article"
        component={Article}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#8791F8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Share"
        component={Share}
        options={{
          title: 'Share',
          headerStyle: {
            backgroundColor: '#8791F8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={About}
        options={{
          title: 'About Us',
          headerStyle: {
            backgroundColor: '#8791F8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Drawer.Navigator>

    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
